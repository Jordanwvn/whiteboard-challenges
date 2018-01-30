'use strict';

const Stack = require('./lib/stack.js');

module.exports = class {
  constructor () {
    this.nq = new Stack;
    this.dq = new Stack;
  }
  enqueue (value) {
    this.nq.push(value);
    return `added ${value} to the queue.`;
  }
  dequeue () {
    if (!this.dq.top) {
      if (!this.nq.top) return null;
      for (; this.nq.top; this.dq.push(this.nq.pop()) );
    }
    return this.dq.pop();
  }
}
