/*
Write a method that changes the first arithmetic operator (+, -, *, /)
in a string to a '?' and returns the resulting string. Don't modify the original string.


*/


function mysteryMath(string) {
  let regex = /[+\-*\/]/g
  return string.replace(regex, "?")
}

console.log(mysteryMath('4 + 3 - 5 = 2'));
// -> '4 ? 3 - 5 = 2'

console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// -> '(4 ? 3 + 2) / 7 - 1 = 1'