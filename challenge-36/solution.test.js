'use strict';

const compare = require('./solution.js');

let testTreeOne = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    value: 4,
    left: null,
    right: null
  }
}

let testTreeTwo = {
  value: 1,
  left: {
    value: 2,
    left: null,
    right: null
  },
  right: {
    value: 3,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: null
  }
}

describe('comparing trees', () => {
  it('should take in two arguments', () => {
    expect(compare.length).toEqual(2);
  })
  it('should return null if either argument is not a tree', () => {
    expect(compare('testTreeOne', testTreeOne)).toBeNull();
    expect(compare(testTreeOne, 'testTreeTwo')).toBeNull();
  })
  it('should have a boolean output', () => {
    expect(typeof compare(testTreeOne, testTreeTwo)).toEqual('boolean');
  })
  it('should return the correct answer', () => {
    expect(compare(testTreeOne, testTreeOne)).toEqual(true);
    expect(compare(testTreeOne, testTreeTwo)).toEqual(false);
  })
})
