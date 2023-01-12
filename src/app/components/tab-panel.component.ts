import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { TabItemProps } from '../models/shared';

@Component({
  standalone: true,
  selector: 'tab-panel',
  imports: [
    CommonModule,
  ],
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>`,
  styles: []
})
export class TabPanelComponent {
  @Input() label!: string;
  @ViewChild(TemplateRef, { static: true }) tpr!: TemplateRef<unknown>;

  constructor(
    private tab: TabComponent
  ) { }

  ngOnInit(): void {
    if (!this.label) {
      throw new Error(`label must be set`);
    }
    this.tab.addTab(this);
  }
}
