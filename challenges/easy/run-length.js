/*

"WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"  ->  "12WB12W3B24WB"

Encoding Algo:

store first character in variable called `prev`
Iterate over each character in the input string starting at index 1
  - compare with previous
    -> if equal: add to count;
    -> if not: take count and concatenate with current charater and push to encoded string


*/

let functions = {
  encode(string) {
    if (string.length === 1) return string;
    let previous = string[0];
    let encodedString = "";
    let count = 1;

    for (let idx = 1; idx < string.length; idx += 1) {
      let currentChar = string[idx];
      if (currentChar !== previous){
        encodedString += (count > 1) ? `${count}${previous}` : `${previous}`;
        count = 1;
        if (idx === string.length - 1) {
          encodedString += currentChar;
        }
        previous = currentChar;
      } else if (idx === string.length - 1) {
        count += 1;
        encodedString += (count > 1) ? `${count}${currentChar}` : `${currentChar}`;
      } else {
        count += 1;
      }

    }

    return encodedString;
  },

  decode(string) {
    let result = "";
    while (string.length > 0) {
      let num = this.extractNumber(string);
      if (num) {
        string = string.slice(num.length);
        result += string[0].repeat(num);
      } else {
        result += string[0];
      }

      string = string.slice(1);
    }
    return result;
  },

  extractNumber(string) {
    let strNum = "";
    for (let idx = 0; idx < string.length; idx += 1) {
      let current = string[idx];

      if (!isNaN(current) && current !== " ") {
        strNum += current;
      } else {
        break;
      }
    }
    return strNum ;
  }
}

console.log(functions.decode("2 hs2q q2w2 "));

module.exports = functions;