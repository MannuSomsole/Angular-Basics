import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInfo]'
})
export class InfoDirective {

  constructor(public ele: ElementRef) { 
    this.ele.nativeElement.style.color = 'blue';
  }

  

}
