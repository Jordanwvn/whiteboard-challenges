'use strict';

const Queue = require('./lib/queue.js');

module.exports = function (root) {
  if (typeof root !== 'object') return null;
  let current;
  let queue = new Queue();
  let result = 0;

  queue.enqueue(root);

  while(queue.back) {
    current = queue.dequeue()
    result += current.value;
    current.children.map (child => queue.enqueue(child))
  }
  return result;
}
