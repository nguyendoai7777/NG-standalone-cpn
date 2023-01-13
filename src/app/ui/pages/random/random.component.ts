import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import PhotoGridComponent from '@components/photo-grid/photo-grid.component';

@Component({
  selector: 'random',
  standalone: true,
  imports: [CommonModule, PhotoGridComponent],
  template: `
    <photo-grid></photo-grid>
  `,
  styleUrls: ['./random.component.scss'],
})
export class RandomComponent {}
