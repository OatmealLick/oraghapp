export class Event {
  title: string;
  description: string;
  location: string;
  date: Date;

  constructor(title: string, description: string, location: string, date: Date) {
    this.title = title;
    this.description = description;
    this.location = location;
    this.date = date;
  }
}
