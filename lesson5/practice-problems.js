/*
Write a function named afterNSeconds that takes two arguments:
a callback and a time duration in seconds. It should wait for
the indicated period, then invoke the callback function.

*/


function afterNSeconds(callback, timeDuration) {
  setTimeout(callback, timeDuration * 1000);
}

function foo() {
  console.log("Hi");
}

afterNSeconds(foo, 5);