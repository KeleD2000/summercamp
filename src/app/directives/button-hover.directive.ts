import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonHover]'
})
export class ButtonHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.el.nativeElement, 'color', '#FFDB89');
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.el.nativeElement, 'color', '');
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '');
  }



}
