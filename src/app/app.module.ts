import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TadaComponent } from './tada/tada.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'tada',
        // component: TadaComponent
        loadChildren: () => import('./tada/tada.module').then(m => m.TadaModule)
      },
      {
        path: 'ziggs',
        loadComponent: () => import('./ziggs/ziggs.component').then(c => c.ZiggsComponent)
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
