/*

Write a program that converts number to its roman numeral counter part.

6: VI
V

9: IX

8: VIII


1800:
1000 -> M
800 -> DCCC

-> MDCCC

1984:

1000 -> M
900 -> CM
80 -> V= LXXX
4 -> IV

-> MCMLXXXIV

54:

46: 


40: XL
6: VI

Sub Problems:

1. Determine the actual value of a given digit. 1XXX .... the digit 1 represents 1000
2. Take that name and Convert it to roman numeral counter part
3. Remove that digit
4. Repeat pattern for all digits


Sub 1:

1. Calculate length of number
2. 10 raised to that length is the place value
3. mulitply the digit by its placevalue to get the value of that digit

Sub 2:

46:

40: XXXX

1. Starting from the Roman numeral `M` -> `I` find the largest possible roman numeral that is smaller than the number
2. See how many times that roman numeral goes into the number
3. Check to make sure it isn't one away from the next roman numeral
  -> yes: use the current roman numeral with the next largest after
  -> no: Add the roman numeral the amount of times it goes into the number
4. return roman numeral


Top-Level Algo:

0. create roman numeral variable to store the full roman numeral
1. Look at first Digit
2. Calculate the place value of that digit
3. calculate the GCN of the place value
4. check for special case
  -> yes: take the GCN and append the next highest roman numeral to it. Add result to roman numeral result
  -> no: divide number by the value of the GCN. Repeat GCN by the result of the division. add to roman numeral result
5. Remove first digit
6. Continue steps 1-5 for all digits
7. return roman numeral


*/


class RomanNumeral {
  static RM_CONVERT = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let romanNumeral = "";
    let number = this.number;
    while (number !== 0) {
      let placevalue = this.calculatePlaceValue(number);
      let GCN = this.greatestCommonNumeral(placevalue);
      let diff = RomanNumeral.RM_CONVERT[this.nextLargestNumeral(GCN)] - placevalue;


      let count = Math.floor(placevalue / RomanNumeral.RM_CONVERT[GCN]);
      if (RomanNumeral.RM_CONVERT[GCN] === placevalue) {
        romanNumeral += GCN;
        number -= placevalue;
        continue;
      }
      if (Object.values(RomanNumeral.RM_CONVERT).includes(diff)) {
        romanNumeral += this.digitToRoman(diff) + this.nextLargestNumeral(GCN);
        number -= placevalue;
        continue;
      } else {
        romanNumeral += GCN.repeat(count);
      }
      number -= (count * RomanNumeral.RM_CONVERT[GCN]);
    }
    return romanNumeral;
    

  }

  digitToRoman(number) {
    let roman;
    for (let key in RomanNumeral.RM_CONVERT) {
      if (RomanNumeral.RM_CONVERT[key] === number) {
        roman = key;
      }
    }
    return roman;
  }

  getValue(numeral) {
    return RomanNumeral.RM_CONVERT[numeral];
  }

  

  nextLargestNumeral(numeral) {
    let romanNumerals = Object.keys(RomanNumeral.RM_CONVERT);
    romanNumerals = romanNumerals.sort((a, b) => RomanNumeral.RM_CONVERT[a] - RomanNumeral.RM_CONVERT[b]);
    for (let idx = 0; idx < romanNumerals.length; idx += 1) {
      let currentNumeral = romanNumerals[idx];
      if (currentNumeral === numeral) {
        return romanNumerals[idx + 1];
      }
    }
    return numeral;
    
  }

  greatestCommonNumeral(number) {
    let romanNumerals = Object.keys(RomanNumeral.RM_CONVERT);
    romanNumerals = romanNumerals.sort((a, b) => RomanNumeral.RM_CONVERT[b] - RomanNumeral.RM_CONVERT[a]);
    let common;
    for (let idx = 0; idx < romanNumerals.length; idx += 1) {
      if (RomanNumeral.RM_CONVERT[romanNumerals[idx]] <= number) {
        common = romanNumerals[idx];
        break;
      }
    }
    return common;

  }

  calculatePlaceValue(number) {
    let length = String(number).length;
    return Math.pow(10, length - 1) * this.getFirstDigit(number);
  }

  getFirstDigit(number) {
    return Number(String(number)[0]);
  }
}





module.exports = RomanNumeral;