import { Component } from '@angular/core';
import { TabComponent } from './tab.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tab-bs',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div class="mt-5 pt-5 tab-list d-flex">
      <div
        *ngFor="let tab of tabList; index as i"
        class="tab-item btn btn{{activeIndex === i? '' : '-outline'}}-info px-5 py-2 mx-3"
        (click)="activeIndexChange.emit(i)"
      >{{tab.label}}</div>
    </div>

    <div class="btn btn-outline-primary w-100 mt-5">
      <ng-container *ngTemplateOutlet="tabList[activeIndex].tpr"></ng-container>
    </div>
  `,
  styles: [
    `
      .tab-list {
        border-top: 1px solid mediumspringgreen;
      }
    `
  ],
  providers: [
    {
      provide: TabComponent,
      useExisting: TabBsComponent,
    }
  ]
})
export class TabBsComponent extends TabComponent {}
