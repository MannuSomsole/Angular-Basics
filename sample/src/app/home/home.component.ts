import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
import { CustomPipe } from '../custom.pipe';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }
  public students: any = [];
  public details = {};
  public noOfStudents: number = 10;
  public showInfo: boolean = false;
  
  
  ngOnInit() {
    this.students = [{name:'ram', class: 'x'},{name:'raj', class: 'ix'}]
  }
  showDetails(item) {
    this.details = item;
  }
  showInHome(data) {
    console.log("IN HOME: "+data);
  }
  goToDetails() {
    this.router.navigate(["/details"]);
  }
}
