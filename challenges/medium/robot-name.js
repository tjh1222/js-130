/*

Write a program that manages robot factory settings.

When robots come off the factory floor, they have no name.
The first time you boot them up, a random name is generated, such as RX837 or BC811.

Every once in a while, we need to reset a robot to its factory settings,
which means that their name gets wiped. The next time you ask, it will
respond with a new random name.

The names must be random; they should not follow a predictable sequence.
Random names means there is a risk of collisions. Your solution should not allow the use of the same name twice when avoidable.


Understand the Problem:

1. Need to create a class called Robot with an instance method called `name` that gets the current random name
2. also needs a reset() instance method that wipes the current name and assigns a new name
3. Name is constructed using 2 Letters at the start and 3 numbers at the end all random of course




Input: 
Output: 
*/
//Math.seedrandom = require('seedrandom');

class Robot {
  static ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  static DIGITS = "0123456789";
  static USED_NAMES = [];
  constructor() {
    this.robotId = this.assignName();
  }

  assignName() {
    let name = "";
    for (let idx = 0; idx < 5; idx += 1) {
      let current;
      if (idx < 2) {
        
        current = Robot.ALPHABET[Math.floor(Math.random() * Robot.ALPHABET.length)];
      } else {
        current = Robot.DIGITS[Math.floor(Math.random() * Robot.DIGITS.length)];
      }
    
      name += current;
    }
    if (Robot.USED_NAMES.includes(name)) {
      return this.assignName();
    } else {
      Robot.USED_NAMES.push(name);
    }
    
    return name;
  }

  name() {
    return this.robotId;
  }

  reset() {
    Robot.USED_NAMES.splice(Robot.USED_NAMES.indexOf(this.robotId), 1);
    this.robotId = this.assignName();
  }

}

module.exports = Robot;