'use strict';

module.exports = function (linkedList, n) {
  if (typeof n !== 'number' || n < 0) return null;
  let length = 0;
  let currentNode = linkedList;
  while (currentNode) {
    length++;
    currentNode = currentNode.next;
  }
  if (length < n) return null;
  currentNode = linkedList;
  while (length > 0) {
    length--;
    currentNode = currentNode.next;
  }
  return currentNode;
}



if (typeof n !== 'number' || n < 0) return null;
let length = 0;
let currentNode;
let iterate = (direction) {
  while (currentNode) {
    currentNode = linkedList;
    length += direction;
    currentNode = currentNode.next;
  }
}
iterate(1);
if (length < n) return null;
iterate(-1);
return currentNode;


let nthFromEnd = function (list, n) {
  if (typeof n !== 'number' || n < 0) return null;
  for (var scout = list; n > 0; n--, scout = scout.next);
  if (length < n) return null;
  for (var target = list, scout = list; scout; target = target.next, scout = scout.next);
  return target;
}
