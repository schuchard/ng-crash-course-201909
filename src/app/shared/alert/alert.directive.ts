import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlert]',
})
export class AlertDirective {
  @Input('appAlert') highlightColor: string;

  constructor(public el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(value: string) {
    this.el.nativeElement.style.backgroundColor = value;
    this.el.nativeElement.style.border = value == null ? null : '1px solid red';
    this.el.nativeElement.style.padding = value == null ? null : '8px';
  }
}
