'use strict';

const findTopParent = require('../index.js');
const Tree = require('../lib/tree.js');

let testTree = new Tree ();
testTree.insert(2);
testTree.insert(3, 2);
testTree.insert(4, 2);
testTree.insert(5, 2);

let expected = {"children": [{"children": [], "value": 3}, {"children": [], "value": 4}, {"children": [], "value": 5}], "value": 2};

describe('FINDING MOST CHILDREN', () => {
  it('should return the expected sum', () => {
    expect( findTopParent(testTree.root) ).toEqual(expected);
    expect( findTopParent(testTree.root).value ).toEqual(2);
  });
  it('should return a number', () => {
    expect( typeof findTopParent(testTree.root) ).toBe('object');
  });
  it('should return null if the input is not an object', () => {
    expect( findTopParent('testTree') ).toEqual(null);
  });
});
