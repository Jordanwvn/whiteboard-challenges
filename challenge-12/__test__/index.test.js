'use strict';

const Queue = require ('../index.js');

let testQueue = new Queue;
let emptyQueue = new Queue;

testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);

describe('TWO STACK QUEUE', () => {
  it('should add an item to the enqueuing stack', () => {
    expect( testQueue.enqueue(4) ).toEqual( 'added 4 to the queue.' );
  })
  it('should remove an item from the dequeuing stack', () => {
    expect( testQueue.dequeue() ).toEqual(1)
    expect( testQueue.dequeue() ).toEqual(2)
    expect( testQueue.dequeue() ).toEqual(3)
    expect( testQueue.dequeue() ).toEqual(4)
  })
  it('should move the items from the enqueuing stack to the dequeuing stack if empty', () => {
    testQueue.enqueue(5);
    testQueue.enqueue(6);
    expect( testQueue.nq.top.value ).toEqual(6);
    expect( testQueue.dq.top ).toEqual(null);

    expect( testQueue.dequeue() ).toEqual(5);
    expect( testQueue.nq.top ).toEqual(null);
    expect( testQueue.dq.top.value ).toEqual(6);
  })
  it('should return null if there are no items to dequeue', () => {
    expect( emptyQueue.dequeue() ).toEqual(null);
  })
})
