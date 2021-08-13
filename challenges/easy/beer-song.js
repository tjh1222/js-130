class BeerSong  {
  constructor() {}

  static verse(beerCount) {
    if (beerCount === 0) return "No more bottles of beer on the wall, no more " +
                   "bottles of beer.\nGo to the store and buy some " +
                   "more, 99 bottles of beer on the wall.\n";

    return `${beerCount} ${beerCount > 1 ? "bottles" : "bottle"} of beer on the wall, ${beerCount} ${beerCount > 1 ? "bottles" : "bottle"} of beer.
Take ${beerCount - 1 ? "one" : "it"} down and pass it around, ${beerCount - 1 ? beerCount - 1 : "no more"} bottle${(beerCount - 1 > 1 || beerCount - 1 === 0) ? "s" : ""} of beer on the wall.\n`;
  }

  static verses(end, start) {
    let versesString = "";

    for (let idx = end; idx >= start; idx -= 1) {
      if (idx !== end) {
        versesString += `\n${this.verse(idx)}`;
      } else {
        versesString += this.verse(idx);
      }
    }
    return versesString;
  }

  static lyrics() {
    return this.verses(99, 0);
  }
}

// console.log(BeerSong.lyrics());
let expected = "99 bottles of beer on the wall, 99 bottles of beer.\n" +
                   "Take one down and pass it around, 98 bottles of beer " +
                   "on the wall.\n\n98 bottles of beer on the wall, " +
                   "98 bottles of beer.\nTake one down and pass it " +
                   "around, 97 bottles of beer on the wall.\n";

// console.log(expected);

module.exports = BeerSong;