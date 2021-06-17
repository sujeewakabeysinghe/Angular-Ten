import { Directive, ElementRef } from '@angular/core';  //added element ref and registered in constructor

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor( private elementRef : ElementRef ) {
    elementRef.nativeElement.style.color = 'coral'
    elementRef.nativeElement.style.fontSize = '25px'
  }

}
