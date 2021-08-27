function forEach(array, callback, thisArg) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(thisArg, array[index], index, array);
  }
}


class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item, idx, array) {
    console.log(this.prefix, item, idx, array);
  }
}

let foo = new Foo("Item: ");
// forEach([1, 2, 3], foo.showItem, foo);
//forEach([4, 5, 6], foo.showItem);
[1, 2, 3].forEach(foo.showItem, foo);
//[4, 5, 6].forEach(foo.showItem);
