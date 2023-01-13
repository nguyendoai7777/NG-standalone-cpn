import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [CommonModule, MatListModule, RouterLinkActive, RouterLink],
  template: `
    <mat-nav-list>
      <mat-list-item>Image</mat-list-item>
      <a
        mat-list-item
        routerLinkActive=""
        routerLink="/"
        #home="routerLinkActive"
        [routerLinkActiveOptions]="{ exact: true }"
        [activated]="home.isActive"
      >
        Home
      </a>
      <a
        mat-list-item
        routerLinkActive=""
        routerLink="/random"
        #random="routerLinkActive"
        [routerLinkActiveOptions]="{ exact: true }"
        [activated]="random.isActive"
      >
        Random photos
      </a>
    </mat-nav-list>
  `,
  styles: [],
})
export class SideBarComponent {}
