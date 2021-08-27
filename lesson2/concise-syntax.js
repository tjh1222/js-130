// function product(...numbers) {
//   return numbers.reduce((total, number) => total * number);
// }

function product() {
  return [].reduce.call(arguments,(total, num) => total * num);
}

let result = product(2, 3, 4, 5);
console.log(result);