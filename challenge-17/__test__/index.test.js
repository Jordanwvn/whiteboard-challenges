'use strict';

const findSum = require('../index.js');
const Tree = require('../lib/tree.js');

let testTree = new Tree ();
testTree.insert(2);
testTree.insert(3, 2);
testTree.insert(4, 2);
testTree.insert(5, 2);

describe('FINDING LEAVES', () => {
  it('should return the expected sum', () => {
    expect( findSum(testTree.root) ).toEqual(14);
  });
  it('should return a number', () => {
    expect( typeof findSum(testTree.root) ).toBe('number');
  });
  it('should return null if the input is not an object', () => {
    expect( findSum('testTree') ).toEqual(null);
  });
});
