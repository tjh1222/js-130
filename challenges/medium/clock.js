/*

Create a clock that is independent of date.

You should be able to add minutes to and subtract minutes from the time represented by a given clock object.
Two clock objects that represent the same time should be equal to each other.

You may not use any built-in date or time functionality; just use arithmetic operations.



Understand the problem:

1. clock is in military time
2. Clock class needs to be created
3. .at(hours, minutes) static method 
4. toString() instance-> prints time as expected "HH:MM"
5. add(minutes) instance method -> adds minutes to time
6. subtract(minutes) instance method -> subtracts minutes from time
7. Need to be able wrap around in accordance to military time
8. is equal instance method (isEqual(otherClock));



1. check to see if the absolute value of the totalMinutes is less than 1440.
  -> if not:
    -> reassign the minutes to the result of the following operation:
      -> totalMinutes - (1440 * Math.floor((totalMinutes/1440)))
2. check if totalMinutes is negative:
  -> if yes:
    -> set minutes to 1440 - minutes
  -> no:
    -> set minutes to 0 + minutes;
3. set hours = floor(minutes / 60)
4. minutes = minutes - hours * 60
5. return [hours, minutes];
  


*/


class Clock {
  static MINUTES_PER_DAY = 1440;
  static MINUTES_PER_HOUR = 60;

  constructor(hours, minutes) {
    this.totalMinutes = this.getTotalMinutes(hours, minutes);
  }

  static at(hours, minutes = 0) {
    return new Clock(hours, minutes);
  }

  getTotalMinutes(hours, minutes) {
    return minutes + (hours * 60);
  }

  isEqual(otherClock) {
    return otherClock.toString() === this.toString();
  }

  getTime() {
    let minutes;
    let hours;
    
    if (Math.abs(this.totalMinutes) > Clock.MINUTES_PER_DAY) {
      minutes = Math.abs(this.totalMinutes) - (Clock.MINUTES_PER_DAY * Math.floor(Math.abs(this.totalMinutes) / Clock.MINUTES_PER_DAY));
    } else {
      minutes = this.totalMinutes;
    }
    if (this.totalMinutes < 0) {
      minutes = Clock.MINUTES_PER_DAY - Math.abs(minutes);
    }
    hours = Math.floor(minutes / Clock.MINUTES_PER_HOUR);
    minutes = minutes - (hours * Clock.MINUTES_PER_HOUR);
    return [hours, minutes];
  }

  toString() {
    let [hours, minutes] = this.getTime();
    return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;
  }

  add(min) {
    this.totalMinutes += min; 
    return this;
  }

  subtract(min) {
    this.totalMinutes -= min;
    return this;
  }
}



module.exports = Clock;