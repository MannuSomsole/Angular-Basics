import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public pName: string = '';
  public productName: string = '';
  public cost: any = 50;
  public myList:any = [];
  public myData:Observable<any>;
  public myMessages: any;

  message$: Observable<{message: string}>;
  
    private messages = [
      {message: 'Hi'},
      {message: 'Hello'},
      {message: 'Good morning'}
    ];
  constructor() {
    
   }
  ngOnChanges() {
    console.log(`ngOnChanges - Products`+ this.pName );
  }

  ngOnInit() {
    console.log(`ngOnInit - Products`);
   
    //Array as stream (Observable)

    /*let list:any = [1,2,3,4];
     this.myList = Observable.from(list).map(x=> x*2);*/

    this.myList.subscribe(res => {
      console.log("list Item: "+res)
    })

    //value as stream
    let initialState = 'TEST';
    let connectionState = new BehaviorSubject(initialState);
    connectionState.subscribe(product => {
      this.productName = product;
      
    })

    this.myData =  this.getData();
    this.resend();
    
    
  }
  resend() {
    this.message$ = Observable.interval(500)
      .map(i => this.messages[i])
      .take(this.messages.length);
  }
  getData() {
    return Observable
    .interval(1000)
    .take(5)
    .map((v) => v * v);
  }
  ngDoCheck() {
    console.log("ngDoCheck - Products (product Name): "+ this.pName +', cost: '+this.cost);
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit - Products");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked - Products");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit - Products");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked - Products");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy - Products");
  }

  onKey(event) {
    this.pName = event.target.value;
  }
  increaseCost() {
    this.cost++;
  }
}
