'use strict';

let SLL = require('./lib/sll.js');
let intersect = module.exports = {};

intersect.find = function (headOne, headTwo) {
  if (!headOne || !headTwo) return null;
  let hash = {};
  let result = new SLL;
  let currentNode = headOne.head;
  while (currentNode) {
    if (!currentNode.value) return null;
    hash[currentNode.value] = true;
    currentNode = currentNode.next;
  }
  currentNode = headTwo.head;
  while (currentNode) {
    if (!currentNode.value) return null;
    if (hash[currentNode.value]) {
      console.log('inside')
      result.insertEnd(currentNode.value);
    }
    currentNode = currentNode.next;
  }
  return result;
}
