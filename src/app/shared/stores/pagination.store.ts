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
  readonly pagination$ = this.select(
    {
      pageIndex: this.currentPage$.pipe(map((c) => c - 1)),
      pageSize: this.select((s) => s.pageSize),
      total: this.select((s) => s.total),
    },
    { debounce: true }
  );

  readonly setTotal: (total: number) => void = this.updater<number>((state, total) => ({
    ...state,
    total,
  }));

  // dùng effect nếu muốn tác động vào stream
  readonly setPage = this.effect<number>(
    pipe(
      debounceTime(250),
      tap((currentPage) => {
        this.patchState({ currentPage });
      })
    )
  );

  ngrxOnStoreInit(): void {
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