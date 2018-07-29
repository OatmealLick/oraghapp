import {Event} from "./event";

export const EVENTS: Event[] = [
  new Event(
    "Life peace music festival",
    "To jest granie z LUCiem, anything can happen bois and gurls",
    "Oświęcim",
    new Date()),
  new Event(
    "Urodziny 18te ORAGH",
    "Granie w Klubie Studio koncertu urodzinowego. (Musi być Janosik)",
    "Kraków",
    new Date()),
  new Event(
    "Znowu KINGSy",
    "Eh. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah " +
    "blah blah blah blah blah blah blah blah blah blah blah blah blah so long, much description blah blah " +
    "kiedy byłem mały miałem żółwia, nie ruszał się nic a potem umarł, świetny zwierzak domowy, nie polecam",
    "Kraków",
    new Date()),
];

export const PAST_EVENTS: Event[] = [
  new Event(
    "Life peace music festival",
    "To jest granie z LUCiem, anything can happen bois and gurls",
    "Oświęcim",
    new Date("Wed, 09 Aug 1995 16:00:00")),
  new Event(
    "Urodziny 18te ORAGH",
    "Granie w Klubie Studio koncertu urodzinowego. (Musi być Janosik)",
    "Kraków",
    new Date("Wed, 15 Sep 2001 00:00:00")),
  new Event(
    "Znowu KINGSy",
    "Eh. Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah " +
    "blah blah blah blah blah blah blah blah blah blah blah blah blah so long, much description blah blah " +
    "kiedy byłem mały miałem żółwia, nie ruszał się nic a potem umarł, świetny zwierzak domowy, nie polecam",
    "Kraków",
    new Date("Wed, 29 Aug 1999 20:00:00")),
];

