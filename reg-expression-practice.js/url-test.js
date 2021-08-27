/*

Write a method that returns true if its argument looks like a URL, false if it does not.

What looks like a url in this case?
1. begins with http:// or https://
2. accepts any non white space characters
3. ends on a non white space character
4. no leading or trailing spaces
*/


function isUrl(string) {
  let regex = /^https?\S+$/;
  return !!string.match(regex)
}




console.log(isUrl('http://launchschool.com'));   // -> true
console.log(isUrl('https://example.com'));       // -> true
console.log(isUrl('https://example.com hello')); // -> false
console.log(isUrl('   https://example.com'));    // -> false