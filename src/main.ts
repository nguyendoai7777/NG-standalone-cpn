import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: 'registry',
        loadComponent: () => import('./app/components/popup.component').then(c => c.PopupComponent),
      }
    ]),
    /*importProvidersFrom([
      BrowserAnimationsModule
    ])*/
    provideAnimations(),
    importProvidersFrom(BrowserAnimationsModule)
  ]
}).then();
