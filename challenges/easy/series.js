/*

create consecutive combinations of a given size

Need to create a class called Series with an instance method that returns a list of all consecutive series of the provided sie

Algo:

1. check to see if size provided is longer than sequence
  -> yes: break
2. Loop from 


*/

class Series {
  constructor(sequence) {
    this.sequence = sequence;
  }

  slices(size) {
    let series = [];
    if (this.sequence.length < size) throw "Invalid Size for sequence length";
    for (let idx = 0; idx < this.sequence.length - size + 1; idx += 1) {
      let current = [];
      current.push(Number(this.sequence[idx]));
      for (let idy = idx + 1; idy < idx + size; idy += 1) {
        current.push(Number(this.sequence[idy]));
      }
      series.push(current);
    }
    return series;
  }
  
}

// let series = new Series("01234");
// console.log(series.slices(2));

module.exports = Series;