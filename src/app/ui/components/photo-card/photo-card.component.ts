import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Photo } from '@model/photo.model';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DetailDialogComponent } from '@components/detail-dialog/detail-dialog.component';

@Component({
  selector: 'photo-card[photo]',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ photo.photographer }}</mat-card-title>
        <mat-card-subtitle>{{ photo.alt }}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content (click)="openDetail()">
        <img mat-card-image [src]="photo.src.large" [alt]="alt" />
      </mat-card-content>
      <mat-card-actions>
        <a [href]="photo.photographer_url">
          <mat-icon fontIcon="link"></mat-icon>
          {{ photo.photographer }}
        </a>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['./photo-card.component.scss'],
  providers: [],
})
export class PhotoCardComponent {
  @Input() photo!: Photo;
  matDialog = inject(MatDialog);
  alt = '';

  ngOnInit() {
    this.alt = this.photo?.alt || `Photo of ${this.photo.photographer}`;
  }

  openDetail() {
    this.matDialog.open(DetailDialogComponent, {
      data: this.photo,
      autoFocus: false,
    });
  }
}
