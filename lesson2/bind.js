"use strict";

function bind(context, func) {
  return function() {
    func.call(context);
  }
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }