'use strict';

module.exports = {}

function (linkedList, n) {
  if (typeof n !== 'number' || n < 0) return null;
  let length = 0;
  let currentNode = linkedList;
  while (currentNode) {
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




function (linkedList, n) {
  if (typeof n !== 'number' || n < 0) return null;
  for (
    let length = 0, currentNode = linkedList;
    currentNode;
    length++, currentNode = currentNode.next;
  )
  if (length < n) return null;
  for (
    let distance = length - n, currentNode = currentNode.next;
    distance > 0;
    distance--, currentNode = currentNode.next;
  )
  return currentNode;
}






let nthFromEnd = function (list, n) {
  if (typeof n !== 'number' || n < 0) return null; // O(2)
  for (var scout = list; n > 0; n--, scout = scout.next); // O(n)
  if (length < n) return null; // O(1)
  for (var target = list, scout = list; scout.next; target = target.next, scout = scout.next); // O(n)
  return target;
}






let nthFromEnd = function (list, n) {
  if (typeof n !== 'number' || n < 0) return null;
  for (var scout = target = list, i = 0; scout; i++, scout = scout.next) {
    if (i >= n) target = target.next;
  }
  return i < n ? null : target;
}
