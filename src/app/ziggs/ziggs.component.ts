import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const init = {
  name: 'void',
  val: 25
}

class InfoMapper {
  fullName?: string;
  constructor(name: string, val: number) {
    this.fullName = `${name} => (${val})`;
  }
}

class InfoMapperSan {
  fullInfo?: string;
  sanitize(inp: any): InfoMapperSan {
    Object.assign(this, inp);
    return { ...this, fullInfo: Object.values(inp).join(' => ') };
  }
}

@Component({
  selector: 'app-ziggs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ziggs.component.html',
  styleUrls: ['./ziggs.component.scss']
})
export class ZiggsComponent {
  ngOnInit() {
    console.log(`before map: `, init);
    const t = new InfoMapper(init.name, init.val);
    const y = new InfoMapperSan().sanitize(init);
    console.log(`after map: `, t);
    console.log(`after map: `, y);
    console.log('doai.nn@tjtech.tech' === 'doai.nn@tjtech.tech');
  }
}
