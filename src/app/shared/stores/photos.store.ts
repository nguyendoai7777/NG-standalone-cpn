import { inject, Injectable } from '@angular/core';
import {
  ComponentStore,
  OnStateInit,
  OnStoreInit,
  provideComponentStore,
} from '@ngrx/component-store';
import { injectDataAccessService } from '@services/data-access.service';
import { injectPaginationStore } from './pagination.store';
import { createInjectionToken } from '../utils/di';
import { catchError, defer, EMPTY, pipe, switchMap, tap, withLatestFrom } from 'rxjs';
import { Photo } from '@model/photo.model';

interface PhotosInitState {
  photos: Photo[];
  query: string;
}

interface GetPhotosProps {
  query: string;
  page: number;
}

export const [injectDefaultQuery, provideDefaultQuery] =
  createInjectionToken<string>('Default Query');

@Injectable()
export class PhotosStore
  extends ComponentStore<PhotosInitState>
  implements OnStoreInit, OnStateInit
{
  private readonly dataAccessService = injectDataAccessService();
  private readonly paginationStore = injectPaginationStore();
  private readonly defaultQuery = injectDefaultQuery();
  readonly query$ = this.select((s) => s.query, { debounce: true });

  readonly photos$ = this.select((s) => s.photos, { debounce: true });
  readonly getPhotos = this.effect<GetPhotosProps>(
    pipe(
      switchMap(({ query, page }) => {
        return defer(() =>
          query
            ? this.dataAccessService.searchPhotos({ query, page })
            : this.dataAccessService.randomPhotos(page)
        ).pipe(
          tap((r) => {
            this.paginationStore.setTotal(r.total_results);
            this.patchState({ photos: r.photos });
          }),
          catchError(() => EMPTY)
        );
      })
    )
  );

  readonly setQuery = this.effect<string>(
    pipe(
      withLatestFrom(this.query$),
      tap(([query, previousQuery]) => {
        if (previousQuery && !query) {
          this.paginationStore.setPage(1);
        }
        this.patchState({ query });
      })
    )
  );

  ngrxOnStoreInit() {
    this.setState({ photos: [], query: this.defaultQuery });
  }

  ngrxOnStateInit() {
    this.getPhotos(
      this.select(
        {
          page: this.paginationStore.currentPage$,
          query: this.query$,
        },
        { debounce: true }
      )
    );
  }
}

export function providePhotosStore(defaultQuery = '') {
  return [provideComponentStore(PhotosStore), provideDefaultQuery(defaultQuery)];
}

export function injectPhotosStore() {
  return inject(PhotosStore);
}
