'use strict';

const Queue = require('./lib/queue.js');
const SLL = require('./lib/sll.js');

module.exports = function (root) {
  if (typeof root !== 'object') return null;
  let current;
  let queue = new Queue();
  let list = new SLL();

  queue.enqueue(root);

  while(queue.back) {
    current = queue.dequeue();
    list.insertEnd(current.value)
    current.children.map (child => queue.enqueue(child))
  }
  return list;
}
