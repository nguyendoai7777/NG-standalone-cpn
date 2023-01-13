import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoGridComponent } from '@components/photo-grid/photo-grid.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, PhotoGridComponent],
  template: `
    <photo-grid [searchBox]="true"></photo-grid>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
