import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

export default class Month {
  constructor(month, year) {
    this.month = month;
    this.year = year;
    this.start = moment([year, month]);
    this.end = this.start.clone().endOf("month");
  }
  getWeekStart() {
    return this.start.weekday();
  }
  getDays() {
    const range = moment.range([this.start, this.end]);
    return Array.from(range.by("day")).map(m => m.format("D"));
  }
}
