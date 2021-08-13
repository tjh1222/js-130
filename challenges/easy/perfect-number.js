/*

Write a program that determines the aliquot sum and determines if the number is perfect, abundant, or deficient.

What is the aliquout sum?

It is sum of all the divisors (not including the number) that divide evenly into the number with no remainder

factors of 6: 1, 2, 3, 6
remove 6 from the factors and you get the numbers to include in aliquot sum
calculate sum
see if it is equal, less, or more than the original number


Test Cases:

1. negative throws an error


Algorithm:

1. Is input number negative?
  -yes: throw error
2. loop from 1 -> number - 1
3. check to see if current idx is a divisor of the number
  - if it is add to array
4. calculate the sum of the array


*/

class PerfectNumber {
  static validateInput(number) {
    if (number < 0) throw "Number can't be negative";
  } 

  static classify(number) {
    PerfectNumber.validateInput(number);
    let divisors = [];

    for (let idx = 1; idx < number - 1; idx += 1) {
      if (number % idx === 0) {
        divisors.push(idx);
      }
    }
    let sum = divisors.reduce((accum, num) => accum + num);
    if (sum === number) {
      return "perfect";
    } else if (sum > number) {
      return "abundant";
    } else {
      return "deficient";
    }
  }
  constructor() {}
}


module.exports = PerfectNumber;