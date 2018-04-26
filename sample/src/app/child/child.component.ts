import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() count: number;
  @Output() sendMsgEvent = new EventEmitter<any>();

  ngOnInit() {

  }
  fireEvent() {
    this.count++;
    this.sendMsgEvent.emit(this.count);
  }
}
