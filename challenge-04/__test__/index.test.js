'use strict';

const intersect = require ('../index.js');

testArrayOne = ['mike', 'sue', 'tom', 'kathy', 'henry'];
testArrayTwo = ['howey', 'jim', 'sue', 'jennifer', 'kathy', 'hank', 'alex'];
expectedArray = ['sue', 'kathy'];

describe ('intersect module', function () {
  describe ('#report intersections', function () {
    it ('should not return null', function () {
      expect ( intersect.report(testArrayOne, testArrayTwo) ).not.toBeNull();
    });
    it ('should return an array', function () {
      expect ( intersect.report(testArrayOne, testArrayTwo) ).toBeInstanceOf(Array);
    });
    it ('should return an array with the intersections', function () {
      expect ( intersect.report(testArrayOne, testArrayTwo) ).toEqual(expectedArray);
      expect ( intersect.report(testArrayTwo, testArrayOne) ).toEqual(expectedArray);
    });
  });
});
