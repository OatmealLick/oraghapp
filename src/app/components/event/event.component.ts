import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Event} from "../../beans/event";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input() event: Event;
  @Output() changedDecision = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  positiveClick() {
    this.changedDecision.emit(["positive", this.event]);
  }

  negativeClick() {
    this.changedDecision.emit(["negative", this.event]);
  }
}
