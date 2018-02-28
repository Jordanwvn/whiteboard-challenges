const expSum = require('../solution.js');

describe('sum of exponent characters', () => {
  it('should return zero if either argument is not a number', () => {
    expect(expSum('base', 1)).toBeNull();
    expect(expSum(2, 'exponent')).toBeNull();
  })
  it('should return a number', () => {
    expect(typeof expSum(2, 7)).toEqual('number');
  })
  it('should take in return the expected result', () => {
    expect(expSum(2, 15)).toEqual(26);
  })
  it('should work with floating numbers as well', () => {
    expect(expSum(2.4, 15)).toEqual(71);
  })
})
