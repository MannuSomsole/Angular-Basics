import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from './common-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //gantt: Gantt;
  constructor(public commonService: CommonServiceService){
   // this.gantt = new Gantt("01/01/2016", "11/30/2016", "01/20/2016", "11/15/2016", "", 100, 3,false);
    
  }
  ngOnInit(){
    console.log('ON init of component');
    this.commonService.displayMessage();
  }
  title = 'app';
}
