import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TadaComponent } from './tada.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TadaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TadaComponent
      }
    ])
  ]
})
export class TadaModule { }
