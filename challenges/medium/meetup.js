/*
Meetups are a great way to meet people who share a common interest.
Typically, meetups happen monthly on the same day of the week.
For example, a meetup's meeting may be set as:

The first Monday of January 2021
The third Tuesday of December 2020
The teenth wednesday of December 2020
The last Thursday of January 2021

Algo:

1. Starting from the first day of the month
2. loop over all the days in the first week until we find the first instance of the target dayOfWeek
  -> once found loop from 1-> weekNumber:
    once at the correct week number set the `day` instance property and return the current instance


*/

class Meetup {
  static DAYS_OF_WEEK = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  static WEEK_NUMBER = ["first", "second", "third", "fourth", "fifth", "last", "teenth"];

  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.day;
  }

  getDaysInMonth() {
    let currentDate = new Date(this.year, this.month - 1, 1);
    let dayCount = 1;
    while(currentDate.getMonth() === this.month - 1) {
      dayCount += 1;
      currentDate = new Date(this.year, this.month - 1, dayCount + 1);
    }
    return dayCount;
  }

  getFirstWeekDay(weekDay) {
    let currentDate;
    for (let idx = 1; idx <= 7; idx += 1) {
      currentDate = new Date(this.year, this.month - 1, idx);
      if (currentDate.getDay() === Meetup.DAYS_OF_WEEK.indexOf(weekDay)) break;
    }
    return currentDate;
  }

  isTeen(day) {
    return day > 12 && day < 20;
  }

  getTeenth(weekday) {
    let currentDate;
    for (let idx = 1; idx <= this.getDaysInMonth(); idx += 1) {
      currentDate = new Date(this.year, this.month - 1, idx);
      if (currentDate.getDay() === Meetup.DAYS_OF_WEEK.indexOf(weekday)) {
        if (this.isTeen(currentDate.getDate())) break;
      }
    }
    return currentDate;
  }



  day(dayOfWeek, weekNumber) {
    if (weekNumber.toLowerCase() === "teenth") return this.getTeenth(dayOfWeek.toLowerCase());

    let currentDate = this.getFirstWeekDay(dayOfWeek.toLowerCase());
    let day = currentDate.getDate();
    let daysInMonth = this.getDaysInMonth();

    for (let idx = 1; idx < Meetup.WEEK_NUMBER.indexOf(weekNumber) + 1; idx += 1) {
      if (daysInMonth - day >= 7) {
        day += 7;
      } else if (weekNumber.toLowerCase() !== "last") {
        return null;
      }
    }

    this.day = new Date(this.year, this.month - 1, day);
    
    
    return this;
  }

  toString() {
    return this.day.toString();
  }

}


module.exports = Meetup;
