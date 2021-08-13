/*

Create a custom set type.

Sometimes it is necessary to define a custom data structure of some type,
like a set. In this exercise you will define your own set type. How it works internally doesn't matter,
as long as it behaves like a set of unique elements that can be manipulated in several well defined ways.

In some languages, including Ruby and JavaScript, there is a built-in Set type. For this problem,
you're expected to implement your own custom set type. Once you've reached a solution,
feel free to play around with using the built-in implementation of Set.

For simplicity, you may assume that all elements of a set must be numbers.

What is a set?

1. a list of unique elements
2. 

*/



class CustomSet {
  constructor(array = []) {
    this.set = this._extractUnique(array);
  }

  _extractUnique(array) {
    let unique = [];
    array.forEach((item) => {
      if (!unique.includes(item)) {
        unique.push(item);
      }
    });
    return unique;
  }

  isEmpty() {
    return this.set.length === 0;
  }

  contains(item) {
    return this.set.some((element) => element === item);
  }

  isSubset(other) {
    if (this.isEmpty()) return true;

    return this.set.every((item) => other.set.includes(item));
  }

  isDisjoint(other) {
    if (this.isEmpty() || other.isEmpty()) return true;

    return !this.set.some((item) => other.set.includes(item));
  }

  isSame(other) {
    if (!this.isSubset(other)) return false;
    return this.set.length === other.set.length;
  }

  add(item) {
    if (!this.set.includes(item)) {
      this.set.push(item);
    }
    return this;
  }

  intersection(other) {
    let set = new CustomSet();
    this.set.forEach((item) => {
      if (other.contains(item)) {
        set.add(item);
      }
    });
    return set;
  }

  difference(other) {
    let diff = this.set.filter((item) => !other.contains(item));
    return new CustomSet(diff);
  }

  union(other) {
    let combined = [...this.set, ...other.set];
    return new CustomSet(combined);
  }
}


module.exports = CustomSet;

