import { Component, importProvidersFrom, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter, Router, RouterLink, RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes, ROUTES_NAME } from './app.routes';
import { AppConfigProps } from '@config/config.interface';
import { provideAppConfig } from '@config/config.di';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  router = inject(Router);

  static boostrap(cfg: AppConfigProps) {
    return bootstrapApplication(this, {
      providers: [
        provideRouter(appRoutes),
        importProvidersFrom(BrowserAnimationsModule),
        provideAppConfig(cfg),
      ],
    }).catch((e) => console.error(`something went wrong: `, e));
  }

  ngOnInit(): void {
    void this.router.navigateByUrl(ROUTES_NAME.TENANT);
  }
}
