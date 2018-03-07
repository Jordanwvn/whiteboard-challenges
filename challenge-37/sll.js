'use strict';

const Node = class {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class SLL {
  constructor () {
    this.head = null;
  }

  insertEnd (value) { // O(1) -> O(n)
    if (value === null) return null;
    let newNode = new Node (value);
    if (this.head === null) {
      this.head = newNode;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return this;
  }
}
