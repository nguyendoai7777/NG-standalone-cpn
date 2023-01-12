import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabPanelComponent } from './tab-panel.component';

@Component({
  standalone: true,
  selector: `tab`,
  imports: [
    CommonModule
  ],
  template: `
    <div class="tab-list d-flex">
      <div
        *ngFor="let tab of tabList; index as i"
        class="tab-item px-5 py-2 mx-3 btn"
        [class.btn-success]="i === activeIndex"
        (click)="activeIndexChange.emit(i); log('run: ', i)"
      >{{tab.label}}</div>
    </div>

    <div class="tab-body">
      <ng-container *ngTemplateOutlet="tabList[activeIndex].tpr"></ng-container>
    </div>
  `,
  styles: [
    `
      .tab-list {

      }

      .tab-item {
        border: 1px solid deeppink;
      }
    `
  ]
})
export class TabComponent {
  @Input() activeIndex = 0;
  @Output() activeIndexChange = new EventEmitter<number>();

  tabList: TabPanelComponent[] = [];

  addTab(tab: TabPanelComponent) {
    this.tabList = [...this.tabList, tab];
  }

  log(...args: unknown[]): void {
    console.log(...args);
  }

}
