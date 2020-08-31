import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBookride]'
})
export class BookrideDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) { }
  @HostListener('click') onClick(){
    this.el.nativeElement.innerHTML="Cancel Booked Ride";
    this.renderer.setStyle(this.el.nativeElement,'background-color','red')
    this.renderer.setStyle(this.el.nativeElement,'color','white')
  }

}
