import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverCursor]'
})
export class HoverCursorDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.cursor = 'pointer';
  } 

  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.cursor = 'default';
  }

}
