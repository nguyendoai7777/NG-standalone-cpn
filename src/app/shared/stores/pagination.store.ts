import { inject, Injectable } from '@angular/core';
import { ComponentStore, OnStoreInit } from '@ngrx/component-store';
import { injectAppConfig } from '@config/config.di';
import { debounceTime, map, pipe, tap } from 'rxjs';

interface PaginationInitState {
  currentPage: number;
  total: number;
  pageSize: number;
}

@Injectable()
export class PaginationStore extends ComponentStore<PaginationInitState> implements OnStoreInit {
  private readonly appConfig = injectAppConfig();

  readonly currentPage$ = this.select((s) => s.currentPage);
  readonly pageSize$ = this.select((s) => s.pageSize);
  readonly pagination$ = this.select(
    {
      pageIndex: this.currentPage$.pipe(map((c) => c - 1)),
      pageSize: this.pageSize$,
      total: this.select((s) => s.total),
    },
    { debounce: true }
  );

  readonly setTotal: (total: number) => void = this.updater<number>((state, total) => {
    console.log(
      `pagination.store.ts => setTotal<updater> \n -------------------------------------`
    );
    return {
      ...state,
      total,
    };
  });

  // dùng effect nếu muốn tác động vào stream
  readonly setPage = this.effect<{ pageSize?: number; currentPage: number }>(
    pipe(
      debounceTime(250),
      tap(({ currentPage, pageSize }) => {
        console.log(`pagination.store.ts => setPage<effect>`);
        this.patchState({ currentPage, pageSize });
      })
    )
  );

  ngrxOnStoreInit(): void {
    console.log(`pagination.store.ts => ngrxOnStoreInit`);

    this.setState({
      currentPage: 1,
      total: 0,
      pageSize: this.appConfig.appInfo.pageSize,
    });
  }
}

export function injectPaginationStore() {
  return inject(PaginationStore);
}
