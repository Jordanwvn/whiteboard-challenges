'use strict';

const fib = require('../solution.js');

describe('recursive', () => {
  it('should return null on a non-number', () => {
    expect(fib.recurse('number')).toBeNull();
  })
  it('should return null on a negative number', () => {
    expect(fib.recurse(-1)).toBeNull();
  })
  it('should return a number', () => {
    expect(typeof fib.recurse(9)).toEqual('number');
  })
  it('should return the correct value', () => {
    expect(fib.recurse(9)).toEqual(34);
  })
})

describe('iterative', () => {
  it('should return null on a non-number', () => {
    expect(fib.iterate('number')).toBeNull();
  })
  it('should return null on a negative number', () => {
    expect(fib.iterate(-1)).toBeNull();
  })
  it('should return a number', () => {
    expect(typeof fib.iterate(9)).toEqual('number');
  })
  it('should return the correct value', () => {
    expect(fib.iterate(9)).toEqual(34);
  })
})
