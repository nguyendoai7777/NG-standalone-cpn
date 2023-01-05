import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalDirective } from '@directive';

const init = {
  name: 'void',
  val: 25
};

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
  imports: [
    CommonModule,
    PortalDirective
  ],
  templateUrl: './ziggs.component.html',
  styleUrls: ['./ziggs.component.scss'],

})
export class ZiggsComponent {
  show = false;
  show2 = true;

  constructor(
    private readonly rd2: Renderer2
  ) {}

  toggle() {
    this.show = !this.show;
  }

  ngOnInit() {
    console.log(`rd2: `, this.rd2);

    /* console.log(`before map: `, init);
     const t = new InfoMapper(init.name, init.val);
     const y = new InfoMapperSan().sanitize(init);
     console.log(`after map: `, t);
     console.log(`after map: `, y);
     console.log('doai.nn@tjtech.tech' === 'doai.nn@tjtech.tech');*/
  }
}
