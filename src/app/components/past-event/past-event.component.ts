import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../beans/event";

@Component({
  selector: 'app-past-event',
  templateUrl: './past-event.component.html',
  styleUrls: ['./past-event.component.css']
})
export class PastEventComponent implements OnInit {

  TRUMPET_ICON: string = "assets/trumpet.png";
  SAX_ICON: string = "assets/sax.png";

  @Input() event: Event;

  constructor() { }

  ngOnInit() {
  }

}
