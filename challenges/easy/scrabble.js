/*

Problem:

Write a problem that accepts a word and returns the scrabble score

Letter values

Letter	Value
A, E, I, O, U, L, N, R, S, T..........	1
D, G..................................	2
B, C, M, P............................	3
F, H, V, W, Y.........................	4
K.....................................	5
J, X..................................	8
Q, Z..................................	10

Examples:

1. empty string should have a score of 0
2. if space exists in string score is 0
3. null scores 0
4. scores are case insensitive


Algorithm:




*/

class Scrabble {
  static score(word) {
    return new Scrabble(word).score();
  }
  static LETTER_VALUE = {
    1: "AEIOULNRST".split(""),
    2: "DG".split(""),
    3: "BCMP".split(""),
    4: "FHVWY".split(""),
    5: "K".split(""),
    8: "JX".split(""),
    10: "QZ".split("")
    
  }
  constructor(word) {
    this.word = word;
  }

  score() {
    if (this.word === "" || this.word === null || this.checkForSpace()) return 0;
    let word = this.word.toUpperCase();
    return word.split("").reduce((accum, char) => accum + this.getLetterValue(char), 0);
  }

  checkForSpace() {
    return this.word.includes(" ");
  }

  getLetterValue(letter) {
    let points = Object.keys(Scrabble.LETTER_VALUE);
    for (let idx = 0; idx < points.length; idx += 1) {
      let point = points[idx];
      if (Scrabble.LETTER_VALUE[point].includes(letter)) {
        return Number(point);
      }
    }
    return 0;
  }

}






module.exports = Scrabble;