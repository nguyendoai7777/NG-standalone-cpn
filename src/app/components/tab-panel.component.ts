import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';

@Component({
  standalone: true,
  selector: 'tab-panel[label]',
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
    const len = this.label.trim();
    if (!this.label || !len.length) {
      console.log(`%cYou should provide label as string and not put empty at <tab-panel>`, 'color: orange; background-color: rgb(255 76 76 / 20%);');
    }
    this.tab.addTab(this);
  }
}
