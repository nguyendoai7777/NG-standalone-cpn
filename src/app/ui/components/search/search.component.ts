import { Component, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'search',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatIconModule],
  template: `
    <mat-form-field>
      <mat-label>Search</mat-label>
      <input matInput [formControl]="queryControl" type="text" />
      <button
        matSuffix
        mat-icon-button
        aria-label="Clear"
        color="accent"
        [disabled]="(queryControl.value || '').length === 0"
        (click)="queryControl.reset()"
      >
        <mat-icon>close</mat-icon>
      </button>
    </mat-form-field>
  `,
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  readonly queryControl = inject(NonNullableFormBuilder).control('');

  @Input() set defaultQuery(v: string) {
    this.queryControl.setValue(v, { emitEvent: false });
  }

  @Output() query = this.queryControl.valueChanges.pipe(debounceTime(500));
}
