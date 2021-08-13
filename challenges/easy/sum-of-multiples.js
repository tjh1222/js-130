/*

Problem:

Default: set is 3 and 5
can override with different set

Need to find all numbers from 1 -> provided number where 3 and 5 are factors
Finally...compute the sum of these numbers

Algorithm:

1. Iterate from 1 -> max number exclusive
  -check the current number to see if it is a multiple of any numbers in `factors`
    -> yes: push to multiples array
  
2. return the sum of the multiples array



*/

class SumOfMultiples {
  constructor() {
    this.factors = [...arguments][0] === undefined ? [3, 5] : [...arguments];
  }

  static to(max) {
    return new SumOfMultiples().to(max);
  }

  to(max) {
    let multiples = [];
    for (let idx = 1; idx < max; idx += 1) {
      if (this.isMultiple(idx)) {
        multiples.push(idx);
      }
    }
    return multiples.reduce((accum, multiple) => accum + multiple, 0);
  }

  isMultiple(number) {
    return this.factors.some((factor) => number % factor === 0);
  }
}

module.exports = SumOfMultiples;