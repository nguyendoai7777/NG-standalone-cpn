import { Route } from '@angular/router';
import { provideComponentStore } from '@ngrx/component-store';
import { PaginationStore } from '@stores/pagination.store';
import { providePhotosStore, provideSearchBox } from '@stores/photos.store';

const layoutRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@components/photo-grid/photo-grid.component'),
    providers: [
      provideComponentStore(PaginationStore),
      providePhotosStore('hela'),
      provideSearchBox(false),
    ],
  },
  {
    path: 'random',
    loadComponent: () => import('@components/photo-grid/photo-grid.component'),
    providers: [
      provideComponentStore(PaginationStore),
      providePhotosStore(),
      provideSearchBox(true),
    ],
  },
];

export default layoutRoutes;
