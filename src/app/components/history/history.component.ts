import {Component, OnInit} from '@angular/core';
import {Event} from "../../beans/event";
import {of} from "rxjs/index";
import {PAST_EVENTS} from "../../beans/mock.events";
import {NavbarService} from "../../services/navbar.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  pastEvents: Event[];

  constructor(private navbarService: NavbarService) {
  }

  ngOnInit() {
    this.navbarService.show();
    of(PAST_EVENTS.sort(this.orderByNewest())).subscribe(events => this.pastEvents = events);
  }

  private orderByNewest() {
    return (eventA: Event, eventB: Event) => {
      if (eventA.date > eventB.date) {
        return -1;
      } else {
        return 1;
      }
    };
  }
}
