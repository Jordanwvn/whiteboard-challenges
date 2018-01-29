'use strict';

const index = require('../index.js');

let tooBig = [... Array(100)]

let testArray = [];
let tooHigh = [];
let tooSmall = [];
for (let i = 1; i <= 100; i++) {
  tooHigh.push(i + 100);
  tooSmall.push(i - 100);
  testArray.push(i);
}
testArray.splice(49, 1);
tooHigh.splice(49, 1);
tooSmall.splice(49, 1);

describe ('FIND MISSING NUMBER', () => {
  it('should take in an array with a length of 99', () => {
    expect( index(tooBig) ).toEqual(null);
  })
  it ('should return the missing value in an array', () => {
    expect( index(testArray) ).toEqual(50);
  })
  it('should return null if any numbers are outside of 1 - 100', () => {
    expect ( index(tooSmall) ).toEqual(null);
    expect ( index(tooHigh) ).toEqual(null);
  })
})
