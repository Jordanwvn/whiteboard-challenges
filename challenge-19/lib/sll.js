'use strict';

const Node = class {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class SLL {
  constructor () {
    this.head = null; // on a new linked list, there needs to be a head pointer, but there still aren't any nodes
  }

  insertEnd (value) { // O(1) -> O(n)
    if (value === null) return null; // if the input is null, return null
    let newNode = new Node (value); // start by making a new node to add
    if (this.head === null) { // if there is no head node (the list is empty)...
      this.head = newNode; // set this node to be the head
      return this; // return the linked list
    } // otherwise, because there IS a list head...
    let currentNode = this.head; // start by looking at the head of the list
    while (currentNode.next !== null) { // while the node you're looking at isn't null...
      currentNode = currentNode.next; // look at the next node in sequence
    } // once the next node is null, and you're looking at the last list item...
    currentNode.next = newNode; // chain the item you're looking at to the new node from before
    return this; // return the linked list
  }
}
