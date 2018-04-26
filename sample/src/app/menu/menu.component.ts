import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input () data: number;
  @Output() count = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    
  }
  incrementCount() {
    this.data++;
    this.count.emit(this.data);
  }
}
