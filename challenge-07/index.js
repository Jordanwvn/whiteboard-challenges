'use strict';

const linkedList = module.exports = {};

linkedList.circleCheck = function (linkedList) {
  if ( typeof linkedList !== 'object' ) return null
  let slow = linkedList;
  let fast = linkedList
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) return true;
  }
  return false;
}
