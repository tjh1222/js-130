/*

Write a simple linked list implementation. The linked list is a fundamental data structure in computer science,
often used in the implementation of other data structures.

The simplest kind of linked list is a singly linked list. Each element in the list contains data and a "next" field pointing
to the next element in the list of elements. This variant of linked lists is often used to represent sequences or push-down
stacks (also called a LIFO stack; Last In, First Out).

Let's create a singly linked list whose elements may contain a range of data such as the numbers 1-10.
Provide functions to reverse the linked list and convert a linked list to and from an array.



*/


class Element {
  constructor(data, nextElement = null) {
    this.data = data;
    this.nextElement = nextElement;
  }

  datum() {
    return this.data;
  }

  isTail() {
    return this.nextElement === null;
  }

  next() {
    return this.nextElement;
  }

  setNext(node) {
    this.nextElement = node;
  }
}

class SimpleLinkedList {
  constructor() {
    this.first = null;
    this.last = null;
  }

  size() {
    let node = this.first;
    let count = 0;
    while (node !== null ) {
      count += 1;
      node = node.next();
    }
    return count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(num) {
    let element = new Element(num, this.first);
    if (this.first === null) {
      this.last = element;
    }
    this.first = element;

  }

  peek() {
    if (this.first === null) return null;
    return this.first.datum()
  }

  head() {
    return this.first;
  }

  pop() {
    let popped = this.first;
    this.first = this.first.next();
    return popped.datum();
  }

  static fromArray(array) {
    let list = new SimpleLinkedList();
    if (array === null) return list;
    array.slice().reverse().forEach((num) => {
      list.push(num);
    });
    return list;
  }

  toArray() {
    let array = [];
    let node = this.first;
    while(node !== null) {
      array.push(node.datum());
      node = node.next();
    }
    return array;
  }


  reverse() {
    let reverseArray = this.toArray().reverse();
    return SimpleLinkedList.fromArray(reverseArray);
  }




}




module.exports = {
  Element,
  SimpleLinkedList,
};