import { Component, OnInit, ViewChild, ContentChild, ElementRef, Directive, Input, ViewChildren, QueryList } from '@angular/core';

import { PaneDirective } from '../directives/pane.directive';


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  @ViewChild('alertView') alertView : ElementRef;
  @ContentChild('insideContent') insideContent: ElementRef;
  @ViewChildren(PaneDirective) panes: QueryList<PaneDirective>;

  serializedPanes: string = '';


  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(" --- ngAfterContentInit - "+ this.insideContent.nativeElement.innerHTML);
  }


  ngAfterViewInit() {
    console.log(" --- ngAfterViewInit - "+ this.alertView.nativeElement.innerHTML);
    this.calculateSerializedPanes();
  }
  calculateSerializedPanes() {
    setTimeout(() => { this.serializedPanes = this.panes.map(p => p.id).join(', ');console.log(this.serializedPanes) }, 0);
    
  }
}
