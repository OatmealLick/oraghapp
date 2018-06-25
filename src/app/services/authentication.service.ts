import {Injectable} from "@angular/core";
import * as moment from "moment";
import {Instrument, ParticipationDecision, User} from "../beans/user";
import {EVENTS} from "../beans/mock.events";
import {Event} from "../beans/event";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {

  constructor() {
  }

  login(email: string, password: string) {
    // todo unmock
    // return this.http.post<User>("/api/login", {email, password})
    //   .do(res => this.below) - extract to method
    //   .shareReplay();
    const expiresAt = moment().add(100,"day");
    localStorage.setItem("token_id", "dupa");
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem("token_id");
    localStorage.removeItem("expires_at");
  }

  isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  private getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  getLoggedUser(): User {
    if (this.isLoggedOut()) {
      return null;
    }

    const eventMap = new Map<Event, ParticipationDecision>();
    const decisions = [
      ParticipationDecision.TO_BE_DETERMINED,
      ParticipationDecision.TO_BE_DETERMINED,
      ParticipationDecision.GOING];

    EVENTS.forEach((event, index) => eventMap.set(event, decisions[index]));
    //todo unmock
    return new User(
      "Bartosz",
      "Wrożyna",
      [Instrument.CLARINET],
      eventMap);
  }
}
