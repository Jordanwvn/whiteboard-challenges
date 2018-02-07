'use strict';

const Queue = require('./lib/queue.js');

module.exports = function (root) {
  if (typeof root !== 'object') return null;
  let current, result;
  let queue = new Queue();
  let mostChildren = 0;

  queue.enqueue(root);

  while(queue.back) {
    current = queue.dequeue();
    if (current.children.length > mostChildren) {
      mostChildren = current.children.length;
      result = current;
    }
    current.children.map (child => queue.enqueue(child))
  }
  return result;
}
