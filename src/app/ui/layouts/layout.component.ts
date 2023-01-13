import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { injectAppConfig } from '@config/config.di';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideBarComponent } from '@components/side-bar/side-bar.component';
import { AppBarComponent } from '@components/app-bar/app-bar.component';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, SideBarComponent, AppBarComponent],
  providers: [],
  template: `
    <mat-sidenav-container class="layout-container">
      <mat-sidenav mode="side" opened>
        <side-bar></side-bar>
      </mat-sidenav>
      <mat-sidenav-content>
        <app-bar></app-bar>
        <div class="layout-content">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      .layout-container {
        position: absolute;
        inset: 0;
      }

      .layout-content {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export default class LayoutComponent {
  appConfig = injectAppConfig();
}
