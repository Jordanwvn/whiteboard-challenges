'use strict';

const flattenTree = require('../index.js');
const Tree = require('../lib/tree.js');

let testTree = new Tree ();
testTree.insert(2);
testTree.insert(3, 2);
testTree.insert(4, 2);
testTree.insert(5, 2);

let expected = {"head": {"next": {"next": {"next": {"next": null, "value": 5}, "value": 4}, "value": 3}, "value": 2}};

describe('FINDING MOST CHILDREN', () => {
  it('should return the expected sum', () => {
    expect( flattenTree(testTree.root) ).toEqual(expected);
    expect( flattenTree(testTree.root).head.value ).toEqual(2);
  });
  it('should return a number', () => {
    expect( typeof flattenTree(testTree.root) ).toBe('object');
  });
  it('should return null if the input is not an object', () => {
    expect( flattenTree('testTree') ).toEqual(null);
  });
});
