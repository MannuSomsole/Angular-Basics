import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnChanges{
  @Input () productCost: any;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(` --- ngOnChanges - Details`);
    for (let propName in changes) {  
      let change = changes[propName];
      let curVal  = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
    
      console.log(` --- ngOnChanges - Details : Input chnaged `+ curVal+"   :   "+prevVal);
    }
    
  }

  ngOnInit() {
    console.log(` --- ngOnInit - Details`);
  }

  ngDoCheck() {
    console.log(" --- ngDoCheck - Details")
  }

  ngAfterContentInit() {
    console.log(" --- ngAfterContentInit - Details");
  }

  ngAfterContentChecked() {
    console.log(" --- ngAfterContentChecked - Details");
  }

  ngAfterViewInit() {
    console.log(" --- ngAfterViewInit - Details");
  }

  ngAfterViewChecked() {
    console.log(" --- ngAfterViewChecked - Details");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy - Details");
  }

}
