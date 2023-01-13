import { Route } from '@angular/router';
import { provideComponentStore } from '@ngrx/component-store';
import { PaginationStore } from '@stores/pagination.store';
import { providePhotosStore } from '@stores/photos.store';

const layoutRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@pages/home/home.component').then((c) => c.HomeComponent),
    providers: [provideComponentStore(PaginationStore), providePhotosStore('computer')],
  },
  {
    path: 'random',
    loadComponent: () => import('@pages/random/random.component').then((c) => c.RandomComponent),
    providers: [provideComponentStore(PaginationStore), providePhotosStore()],
  },
];

export default layoutRoutes;
