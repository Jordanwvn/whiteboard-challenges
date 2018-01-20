'use strict';

let find = module.exports = {};

find.middleSmall = (list) => {
  for (var slow = fast = list; (fast.next) && (fast.next.next); slow = slow.next, fast = fast.next.next);
  return slow;
}

find.middleBig = function (list) {
  if (typeof list !== 'object') return null;
  let length = 0; // this will hold the length of traversals to get to the end
  let node = list; // this will point to the current node
  while (node.next !== null) { // while there is still a next node...
    if (node.value === null) return null;
    length++; // increment the length by one
    node = node.next; // move to the next node
  }
  node = list; // return node to the starting point
  let halfway = ~~ (length / 2); // halfway is the rounded half of the full traversal
  while (halfway !== 0) { // while halfway is not equal to 0...
    halfway--; // decrease halfway
    node = node.next; // move to the next node
  }
  return node; // return the current node, which should be in the middle
}
