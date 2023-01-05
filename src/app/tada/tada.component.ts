import { Component } from '@angular/core';

@Component({
  selector: 'app-tada',
  templateUrl: './tada.component.html',
  styleUrls: ['./tada.component.scss']
})
export class TadaComponent {
  constructor() {
    console.log(`tada work`);
  }
}
