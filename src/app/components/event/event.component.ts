import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Event} from "../../beans/event";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  animations: [
    trigger('click', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(4)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class EventComponent implements OnInit {

  @Input() event: Event;
  @Output() changedDecision = new EventEmitter();
  public state = 'inactive';

  constructor() { }

  ngOnInit() {
  }

  positiveClick() {
    this.changedDecision.emit(["positive", this.event]);
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  negativeClick() {
    this.changedDecision.emit(["negative", this.event]);
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}
