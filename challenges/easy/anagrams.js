/*
Write a program that takes a word and a list of possible anagrams and selects the correct sublist
that contains the anagrams of the word.

For example, given the word "listen" and a list of candidates like "enlists", "google", "inlets", and "banana",
the program should return a list containing "inlets". Please read the test suite for the exact rules of anagrams.

Understand:

1.Need to create a class called anagram that creates anagram detectors
2. Accepts a list of strings as input...returns a list of anagrams if they exist
3. is an anagram if the string contains the same characters and amount of characters
4. Case insensitive
5. anagrams Can't be the original string(remember still case insensitive)


Algorithm for anagram check:

1. Create a result array to store anagrams
2. For Each string in the array passed in as an argument to the function
  -> check to see if string is the original string
    -> yes: skip
  -> Get letter count
  -> compare with letter count of original string
    -> if equal: push to resulting anagram
3. return resulting array


Algorithm for comparing letter count objects:

{a: 2, b: 3, c: 4}
{a:2, b: 3}
needs to be false

1. Extract the keys from both input objects into their own array
2. check to make sure the lengths of the two arrays are equal
  -> if not: return false
3. For Each Key:
  Compare the value associated with that key for both objects
    -> if they aren't equal return false
4. return true

*/

class Anagram {
  constructor(string) {
    this.string = string;
    this.letters = this.letterCount(this.string)
  }

  match(array) {
    let result = [];
    for (let idx = 0; idx < array.length; idx += 1) {
      let currentString = array[idx];
      if (currentString.toLowerCase() === this.string.toLowerCase()) {
        continue;
      }
      let letters = this.letterCount(currentString);
      if (this.compareLetterCounts(letters)) {
        result.push(currentString);
      }
    }
    return result;

  }

  letterCount(string) {
    string = string.toLowerCase();
    let letters = {};
    for (let idx = 0; idx < string.length; idx += 1) {
      let letter = string[idx];
      if (letters.hasOwnProperty(letter)) {
        letters[letter] += 1;
      } else {
        letters[letter] = 1;
      }
    }
    return letters;

  }

  compareLetterCounts(letters) {
    let keys = Object.keys(this.letters);
    let otherKeys = Object.keys(letters);

    if (keys.length !== otherKeys.length) return false;

    for (let idx = 0; idx < keys.length; idx += 1) {
      let currentKey = keys[idx];
      let otherKey = keys[idx];
      if (this.letters[currentKey] !== letters[otherKey]) {
        return false;
      }

    }
    return true;
  }
}

module.exports = Anagram;