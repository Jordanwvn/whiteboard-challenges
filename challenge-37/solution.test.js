'use strict';

const SLL = require('./sll.js');
const convert = require('./solution.js');

let tree = {
  root: {
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
}

let expected = {
  "head": {
    "value": 1,
    "next": {
      "value": 2,
      "next": {
        "value": 3,
        "next": {
          "value": 4,
          "next": null
        }
      }
    }
  }
}

describe('converting trees to singly linked lists', () => {
  it('should take one argument', () => {
    expect(convert.length).toEqual(1);
  })
  it('should return null the argument is not a tree', () => {
    expect(convert('tree')).toBeNull();
  })
  it('should have a singly linked list output', () => {
    expect(convert(tree)).toBeInstanceOf(SLL);
  })
  it('should return the correct answer', () => {
    expect(convert(tree)).toEqual(expected);
  })
})
