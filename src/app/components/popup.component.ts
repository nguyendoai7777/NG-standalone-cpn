import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'popup',
  template: `
    <mat-card>
      <mat-card-content>Simple card</mat-card-content>
      <mat-card-content>Simple card</mat-card-content>
      <mat-card-content>Simple card</mat-card-content>
      <mat-card-content>Simple card</mat-card-content>
      <mat-card-content>Simple card</mat-card-content>
      <mat-card-content>Simple card</mat-card-content>
      <mat-card-content>Simple card</mat-card-content>
    </mat-card>
  `,
  imports: [
    CommonModule,
    MatCardModule
  ],
  styles: [
    `
      :host {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `
  ],
  providers: []
})
export class PopupComponent {
  constructor() { }
}
