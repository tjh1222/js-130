/*

Write a program that calculates the Hamming distance. Compare two dna strands to see if they have any differences. Count 
these differences to calculate "hamming distance"

GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^

If the lengths of dna strands are different only calculate hamming distance up to the smallest strand length

GAGCCTACTAACGGGAT
CATCGTAATGACG
^ ^ ^  ^ ^   
HD: 5

Need to create a class called DNA that creates instances of dna

Each DNA instance:
  has a dna string
  has a method that lets you calculate hamming distance


Algorithm for hammingDistance

1. find the smallest strand by length
2. starting from index of 0 -> smallest strand length - 1
  -> Compare char at position index for each strand
  -> Check to see if they are different
    -> yes: increment hammingCounter
3. return hammingCounter;

*/

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(strand) {
    let hammingCounter = 0;
    let commonLength = this._getCommonLength(strand);
    for (let idx = 0; idx < commonLength; idx += 1) {
      if (this.strand[idx] !== strand[idx]) {
        hammingCounter += 1;
      }
    }
    return hammingCounter;
  }

  _getCommonLength(strand) {
    if (strand.length === this.strand.length) return strand.length;

    if (this.strand.length > strand.length) {
      return strand.length;
    }
    return this.strand.length;
  }
}

module.exports = DNA;