import { Routes } from '@angular/router';

export const ROUTES_NAME = {
  TENANT: 'tenant',
} as const;

export const appRoutes: Routes = [
  {
    path: ROUTES_NAME.TENANT,
    loadComponent: () => import('@pages/tenant').then((c) => c.TenantComponent),
  },
  {
    path: '',
    loadComponent: () => import('@layouts/layout.component'), // k can then(c => c.Component) neu export class dưới dạng default
    loadChildren: () => import('@layouts/layout.routes'),
  },
];

export default appRoutes;
