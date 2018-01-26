'use strict';

const searches = require('../index.js');

describe('BINARY SEARCH', () => {
  let sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  it('should return an error if n is not a number', () => {
    expect( searches.binary('n', sortedArray) ).toBeNull();
  });
  it('should return an error if the array is not an array', () => {
    expect( searches.binary(12, 'not an array') ).toBeNull();
  });
  it('should return an object', () => {
    expect( searches.binary(12, sortedArray) ).toBeInstanceOf(Object);
  });
  it('should return an object with n at the correct index', () => {
    expect( searches.binary(12, sortedArray) ).toEqual({index: 12, value: 12})
    expect( searches.binary(0, sortedArray) ).toEqual({index: 0, value: 0})
    expect( searches.binary(7, sortedArray) ).toEqual({index: 7, value: 7})
  });
  it('should return null if n is not within the array', () => {
    expect( searches.binary(22, sortedArray) ).toEqual(null)
  })
});

describe('BRACES STACK', () => {
  let goodBraces = '{}{{}{}}{}{{{}{}}}'
  let badBraces = '{}{}}{}{}}{}{}'

  it('should return false if input is not a string', () => {
    expect( searches.matchingBraces(1337) ).toEqual(false);
  });
  it('should return true if the braces are pairs', () => {
    expect( searches.matchingBraces(goodBraces) ).toEqual(true);
  });
  it('should return false if the braces are not pairs', () => {
    expect( searches.matchingBraces(badBraces) ).toEqual(false);
  });
});
