import { Route } from '@angular/router';
import { provideComponentStore } from '@ngrx/component-store';
import { PaginationStore } from '@stores/pagination.store';
import { providePhotosStore, provideSearchBox } from '@stores/photos.store';

const layoutRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@components/photo-grid/photo-grid.component'),
    providers: [
      providePhotosStore('hela'),
      provideComponentStore(PaginationStore),
      provideSearchBox(false),
    ],
  },
  {
    path: 'random',
    loadComponent: () => import('@components/photo-grid/photo-grid.component'),
    providers: [
      providePhotosStore(),
      provideComponentStore(PaginationStore),
      provideSearchBox(true),
    ],
  },
];

export default layoutRoutes;
