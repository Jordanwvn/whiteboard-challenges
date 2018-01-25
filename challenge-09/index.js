'use strict';

let list = module.exports = {};

list.original = function (n, linkedList) {
  if (typeof n !== 'number' || n < 0) return null;
  let length = 0;
  let currentNode = linkedList;
  while (currentNode.next) {
    length++;
    currentNode = currentNode.next;
  }
  if (length < n) return null;
  let distance = length - n;
  currentNode = linkedList;
  while (distance > 0) {
    distance--;
    currentNode = currentNode.next;
  }
  return currentNode;
}



list.nthFromEnd = function (n, list) {
  if (typeof n !== 'number' || n < 0) return null;
  for (var scout = list, target = list, i = 0; scout; i++, scout = scout.next) {
    if (i > n) target = target.next;
  }
  return i < n ? null : target;
}
