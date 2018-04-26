import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appError]'
})
export class ErrorDirective {

  constructor(public eleRef: ElementRef) { 
    this.eleRef.nativeElement.style.color = 'red';
  }

}
