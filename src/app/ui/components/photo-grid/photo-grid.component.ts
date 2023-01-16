import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '@components/search/search.component';
import { injectDefaultQuery, injectPhotosStore } from '@stores/photos.store';
import { LetModule, PushModule } from '@ngrx/component';
import { PhotoCardComponent } from '@components/photo-card/photo-card.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { injectPaginationStore } from '@stores/pagination.store';

@Component({
  selector: 'photo-grid',
  standalone: true,
  imports: [
    CommonModule,
    SearchComponent,
    PushModule,
    PhotoCardComponent,
    MatPaginatorModule,
    LetModule,
  ],
  template: `
    <mat-paginator
      *ngrxLet="paginatorStore.pagination$ as paginator"
      [showFirstLastButtons]="true"
      [length]="paginator?.['total']"
      [pageSize]="paginator?.['pageSize']"
      [pageIndex]="paginator?.['pageIndex']"
      (page)="
        paginatorStore.setPage({ currentPage: $event.pageIndex + 1, pageSize: $event.pageSize })
      "
      [pageSizeOptions]="[15, 20, 25, 30, 50, 75, 100, 200]"
    ></mat-paginator>
    <search
      *ngIf="photosStore.searchBox$ | ngrxPush"
      [defaultQuery]="(photosStore.query$ | ngrxPush)!"
      (query)="photosStore.setQuery($event)"
    ></search>
    <div class="photo-grid">
      <photo-card *ngFor="let photo of photosStore.photos$ | ngrxPush" [photo]="photo"></photo-card>
    </div>
    <mat-paginator
      *ngrxLet="paginatorStore.pagination$ as paginator"
      [showFirstLastButtons]="true"
      [length]="paginator?.['total']"
      [pageSize]="paginator?.['pageSize']"
      [pageIndex]="paginator?.['pageIndex']"
      (page)="
        paginatorStore.setPage({ currentPage: $event.pageIndex + 1, pageSize: $event.pageSize })
      "
      [pageSizeOptions]="[15, 20, 25, 30, 50, 75, 100, 200]"
    ></mat-paginator>
  `,
  styleUrls: ['./photo-grid.component.scss'],
})
export default class PhotoGridComponent {
  @Input() searchBox = false;
  readonly photosStore = injectPhotosStore();
  readonly paginatorStore = injectPaginationStore();
}
