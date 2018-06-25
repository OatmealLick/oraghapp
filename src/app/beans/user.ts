import {Event} from "./event";

export enum ParticipationDecision {
  TO_BE_DETERMINED, GOING, NOT_GOING
}

export enum Instrument {
  FLUTE, CLARINET, TRUMPET, SAXOPHONE
}

export class User {
  firstName: string;
  lastName: string;
  instrument: Instrument[];
  futureEvents: Map<Event, ParticipationDecision>; //todo resolve duplication issue - dashboard also has futureevents

  constructor(firstName: string,
              lastName: string,
              instrument: Instrument[],
              futureEvents: Map<Event, ParticipationDecision>) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.instrument = instrument;
    this.futureEvents = futureEvents;
  }
}
