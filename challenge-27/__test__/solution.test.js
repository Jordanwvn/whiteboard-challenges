'use strict';

const rotate = require('../solution.js');

let test = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let bad = [
  [1, null, 3],
  [4, null, 6],
  [7, null, 9]
];

let expected = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
];

describe('rotating an array', () => {
  it('should return null if the argument passed in is not an array', () => {
    expect(rotate('test')).toBeNull();
  })
  it('should return null if any item inside of the array is null', () => {
    expect(rotate(bad)).toBeNull();
  })
  it('should return an array', () => {
    expect(rotate(test)).toBeInstanceOf(Array);
  })
  it('should return the expected result', () => {
    expect(rotate(test)).toEqual(expected);
  })
})
