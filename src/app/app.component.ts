import { Component, importProvidersFrom, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter, Router, RouterLink, RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppConfigProps } from '@config/config.interface';
import { injectAppConfig, provideAppConfig } from '@config/config.di';
import appRoutes from './app.routes';
import { HttpInterceptorFn, provideHttpClient, withInterceptors } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

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
  private static readonly Interceptor: HttpInterceptorFn = (req, next) => {
    const { appInfo } = injectAppConfig();
    if (!appInfo) {
      return next(req);
    }
    return next(
      req.clone({
        setHeaders: {
          Authorization: `Bearer ${appInfo.apiKey}`,
        },
      })
    );
  };

  static boostrap(cfg: AppConfigProps) {
    return bootstrapApplication(this, {
      providers: [
        provideRouter(appRoutes),
        importProvidersFrom(BrowserAnimationsModule),
        importProvidersFrom(MatDialogModule),
        provideAppConfig(cfg),
        provideHttpClient(withInterceptors([this.Interceptor])),
      ],
    }).catch((e) => console.error(`something went wrong: `, e));
  }

  ngOnInit(): void {
    // void this.router.navigateByUrl(ROUTES_NAME.TENANT);
  }
}
