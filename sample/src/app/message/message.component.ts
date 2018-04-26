import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CommonServiceService } from '../common-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @ViewChild('msg') msg: ElementRef;
  message: any;
  subscription: Subscription;
  msgToSend: any;

  constructor(private commonService: CommonServiceService) {
    // subscribe to home component messages
    this.subscription = this.commonService.getMessage().subscribe(message => { this.message = message; });
}
ngOnInit() {
  // turning an array into a stream
  let users = [1, 2, 3, 4, 5, 6];
  let userStream = Observable.from(users).map(x => x*x).filter(x => x>4);

  userStream.subscribe(items => {
    console.log(items)
  });

  let usersList = [
    {age: 16, name: 'Angela'},
    {age: 18, name: 'Maria'},
    {age: 36, name: 'Frances'}
  ];
  let youths = [];
  Observable.from(usersList)
    .filter( function(user){ return user.age < 20; } )
    .subscribe( function(user){ youths.push(user) } );
  
  console.log("Youth: "+JSON.stringify(youths));


  let data:any = this.getData().subscribe(data => {
    console.log('data... '+data);
  });


  //value as stream
  let initialState = 'TEST';
  let connectionState = new BehaviorSubject(initialState);
  connectionState.subscribe(value => {
    console.log('Value '+ value);
    
  })
}
ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

sendMessage(): void {
  console.log(this.msgToSend);
  // send message to subscribers via observable subject
  this.commonService.sendMessage('Hello Good morining');
}

getData() {
  return Observable
  .interval(1000)
  .take(5)
  .map((v) => v * v);
}

getDetails() {
  this.commonService.postRequest('http://myURL',{'uNAme':'test', 'pwd': '123456'}).subscribe(res => {
    let response:any = res.toJSON();
  });
}

}
