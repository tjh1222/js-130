/*

convert octal numbers to decimal form

How to convert an octal number to decimal?

10 = 8 ^ 0 * 0 + 8 ^ 1 * 1 = 8

Rules: 
1. 8 and above for any place is invalid and will return 0
2. if letters are present return 0
3. input is an octal string and result is decimal number

Algorithm:

0. Create variable `sum` to store the sum
1. Iterate from the right of the string to the left...
2. For each character in the octal string
  - Check to see if its a number
    -> no: return 0
  -Calculate placevalue.... (length - idx - 1)
  - multiply placevalue by current number and add to `sum`
3. return sum

*/

class Octal {
  constructor(octal) {
    this.octal = octal;
  }

  toDecimal() {
    let sum = 0;
    for (let idx = this.octal.length - 1; idx >= 0; idx -= 1) {
      let currentNumber = this.octal[idx];
      if (!this.validateDigit(currentNumber)) return 0;
      let placevalue = this.octal.length - idx - 1;
      sum += Math.pow(8, placevalue) * Number(currentNumber);
    }
    return sum;
  }

  validateDigit(digit) {
    let number = Number(digit)
    if (Number.isNaN(number)) return false;
    if (number >= 8 || number < 0) return 0;
    return true;
  }
}




module.exports = Octal;