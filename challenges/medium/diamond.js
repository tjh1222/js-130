/*

Input: letter
output: a diamond whos side is dependent on how far the input letter is away from the letter "a"

  A
 B B
C   C
 B B
  A

    A
   B B
  C   C
 D     D
E       E
 D     D
  C   C
   B B
    A


Algorithm:

1. calculate the difference in charcode between A and the letter passed in as an argument 
2. Iterate from 0 -> the calculalted difference
  -> calculate outside spaces for each side abs(current - target)
  -> calculate middle spaces: 2 * (current - "A")
  -> create string `${outside}${current}${outside}`
  -> output string to the console
*/



class Diamond {
  static LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  static makeDiamond(letter) {
    let result = "";
    let diff = Math.abs(this.charCodeDiff(letter, "A"));
    for (let idx = 0; idx <= diff; idx += 1) {
      let current = this.letterByIndex(idx);
      let outsideSpaces = this.charCodeDiff(current,letter);
      let middleSpaces = 2 * (this.charCodeDiff(current,"A")) - 1;
      if (idx === 0) {
        result += (`${" ".repeat(outsideSpaces)}${current}${" ".repeat(outsideSpaces)}\n`);
      } else {
        result += (`${" ".repeat(outsideSpaces)}${current}${" ".repeat(middleSpaces)}${current}${" ".repeat(outsideSpaces)}\n`);
      }
    }
    
    for (let idx = diff - 1 ; idx >= 0; idx -= 1) {
      let current = this.letterByIndex(idx);
      let outsideSpaces = this.charCodeDiff(current,letter);
      let middleSpaces = 2 * (this.charCodeDiff(current,"A")) - 1;
      if (idx === 0) {
        result += (`${" ".repeat(outsideSpaces)}${current}${" ".repeat(outsideSpaces)}\n`);
      } else {
        result += (`${" ".repeat(outsideSpaces)}${current}${" ".repeat(middleSpaces)}${current}${" ".repeat(outsideSpaces)}\n`);
      }
    }
    return result;

  }

  static letterByIndex(idx) {
    return this.LETTERS[idx];
  }

  static charCodeDiff(a, b) {
    return Math.abs(this.LETTERS.indexOf(a) - this.LETTERS.indexOf(b));
  }
}


console.log(Diamond.makeDiamond("B"));

module.exports = Diamond;



