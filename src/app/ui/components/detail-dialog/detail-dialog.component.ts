import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Photo } from '@model/photo.model';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'detail-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatCardModule, MatIconModule],
  template: `
    <div class="flex">
      <h1 mat-dialog-title>
        {{ photo.photographer }}
      </h1>
      <button mat-dialog-close="" mat-icon-button color="accent">
        <mat-icon>close</mat-icon>
      </button>
    </div>
    <div mat-dialog-content class="_80">
      <div class="description">{{ photo.alt }}</div>
      <img mat-card-image [src]="photo.src.large" [alt]="photo.alt" [title]="photo.alt" />
    </div>
    <!--<div mat-dialog-actions>
      <button mat-button mat-dialog-close>No</button>
      <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>
    </div>-->
  `,
  styles: [
    `
      :host {
        position: relative;

        .flex {
          display: flex;
          justify-content: space-between;
          align-items: center;

          button {
            margin-right: 0.5rem;
          }
        }

        img {
          width: 100%;
        }

        ._80 {
          max-height: 80vh;
        }
      }

      .description {
        padding-bottom: 0.5rem;
        font-size: 0.8rem;
      }
    `,
  ],
})
export class DetailDialogComponent {
  // @Input() photo!: Photo;
  photo = inject(MAT_DIALOG_DATA) as Photo;
}
