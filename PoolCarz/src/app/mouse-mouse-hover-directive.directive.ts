import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseMouseHoverDirective]'
})
export class MouseMouseHoverDirectiveDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) { 
    
  }
  @HostListener('mouseenter') mouseover(){
    this.renderer.setStyle(this.el.nativeElement,'background-color','lightblue')
  }
  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.el.nativeElement,'background-color','')
  }
}
