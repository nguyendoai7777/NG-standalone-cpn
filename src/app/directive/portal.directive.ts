import { Directive, ElementRef, inject, Input, NgModule, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[portal]'
})
export class PortalDirective implements OnChanges {
  @Input() portal = true;
  dcm = inject(DOCUMENT);

  constructor(
    private readonly elr: ElementRef<HTMLDivElement>,
    private readonly rd2: Renderer2
  ) {
    this.rd2.setAttribute(elr.nativeElement, 'cpn-type', 'portal');
    this.rd2.removeChild(elr.nativeElement.parentElement, elr.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentState = changes?.['portal'].currentValue;
    if (currentState) {
      this.rd2.appendChild(this.dcm.body, this.elr.nativeElement);
    } else {
      const existed = this.dcm.body.querySelector('[cpn-type="portal"]');
      if(existed) {
        this.rd2.removeChild(this.dcm.body, this.elr.nativeElement);
      }
    }
  }
}

@NgModule({
  declarations: [PortalDirective],
  imports: [],
  exports: [PortalDirective]
})
export class PortalModule {
}
