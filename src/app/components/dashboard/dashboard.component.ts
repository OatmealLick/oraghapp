import {Component, Inject, OnInit} from '@angular/core';
import {NavbarService} from "../../services/navbar.service";
import {of} from "rxjs";
import {ParticipationDecision, User} from "../../beans/user";
import {AuthenticationService} from "../../services/authentication.service";
import {Event} from "../../beans/event";
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";
import {AddEventDialogComponent} from "../add-event-dialog/add-event-dialog.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  decision = ParticipationDecision;
  user: User;
  futureEvents: Map<Event, ParticipationDecision>;

  constructor(private navbarService: NavbarService,
              private authenticationService: AuthenticationService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.navbarService.show();
    of(this.authenticationService.getLoggedUser()).subscribe(user => this.user = user);
    of(this.authenticationService.getLoggedUser().futureEvents).subscribe(map => this.futureEvents = map);
  }

  handleEventUpdate(args: Object[]) {
    const result = args[0] as string;
    const event = args[1] as Event;

    if (result === "positive") {
      this.futureEvents.set(event, ParticipationDecision.GOING);
    } else {
      this.futureEvents.set(event, ParticipationDecision.NOT_GOING);
    }
  }

  isEventOfDecision(event: Event, decision: ParticipationDecision) {
    return this.futureEvents.get(event) === decision;
  }

  openAddingEventDialog(): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.width = '600px';

    const dialogRef = this.dialog.open(AddEventDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      //todo send form
      console.log('The dialog was closed');
    });
  }
}
