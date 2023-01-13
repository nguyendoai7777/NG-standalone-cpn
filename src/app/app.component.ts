import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TabComponent } from './components/tab.component';
import { TabBsComponent } from './components/tab-bs.component';
import { TabPanelComponent } from './components/tab-panel.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    TabComponent,
    TabBsComponent,
    TabPanelComponent,
    MatPaginatorModule,
    MatButtonModule
  ],
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="alert alert-warning"></div>
    <button style="margin-left: auto;" mat-raised-button color="accent">Register</button>
    <tab [(activeIndex)]="active">
      <tab-panel label="tab 1">
        Content of tab 1
      </tab-panel>
      <tab-panel label="tab 2">
        Content of tab 2
      </tab-panel>
      <tab-panel label="tab 3">
        Content of tab 3
      </tab-panel>
      <tab-panel label="tab 4">
        Content of tab 4
      </tab-panel>
      <tab-panel label="tab 5">
        Content of tab 5
      </tab-panel>
      <tab-panel label="tab 6">
        Content of tab 6
      </tab-panel>
      <tab-panel label="tab 7">
        Content of tab 7
      </tab-panel>
    </tab>
    <div class="alert alert-success"></div>
    <tab-bs [(activeIndex)]="active">
      <tab-panel>
        Content of tab 1
      </tab-panel>
      <tab-panel label="tab 2">
        Content of tab 2
      </tab-panel>
      <tab-panel label="tab 3">
        Content of tab 3
      </tab-panel>
      <tab-panel label="tab 4">
        Content of tab 4
      </tab-panel>
      <tab-panel label="tab 5">
        Content of tab 5
      </tab-panel>
      <tab-panel label="tab 6">
        Content of tab 6
      </tab-panel>
      <tab-panel label="tab 7">
        Content of tab 7
      </tab-panel>
    </tab-bs>
    <mat-paginator
      [length]="100"
      [pageSize]="10"
      [pageSizeOptions]="[5, 10, 25, 100]"
      aria-label="Select page">
    </mat-paginator>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  title = 'decorator';
  active = 0;

  constructor() {}

  ngOnInit() {
  }

}
