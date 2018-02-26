'use strict';

const intersect = require ('../index.js');

let testArrayOne = ['mike', 'sue', 'tom', 'kathy', 'henry'];
let testArrayTwo = ['howey', 'jim', 'sue', 'jennifer', 'kathy', 'hank', 'alex'];
let expectedArray = ['sue', 'kathy'];

describe ('intersect module', function () {
  describe ('#report intersections', function () {
    it ('should not return null', function () {
      expect ( intersect(testArrayOne, testArrayTwo) ).not.toBeNull();
    });
    it ('should return an array', function () {
      expect ( intersect(testArrayOne, testArrayTwo) ).toBeInstanceOf(Array);
    });
    it ('should return an array with the intersections', function () {
      expect ( intersect(testArrayOne, testArrayTwo) ).toEqual(expectedArray);
      expect ( intersect(testArrayTwo, testArrayOne) ).toEqual(expectedArray);
    });
  });
});
