'use strict';

let find = require('../index.js');

let odd = {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: {value: 5, next: null}}}}};

let expectedOdd = {value: 3, next: {value: 4, next: {value: 5, next: null}}};

let even = {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null}}}};

let expectedEven = {value: 2, next: {value: 3, next: {value: 4, next: null}}};

let breakArray = {value: 1, next: {value: null, next: {value: 3, next: null}}};

describe('find module', function () {
  describe('#find middle', function () {
    it ('should return null if the input is not an object', function () {
      expect( find.middleBig('not an object') ).toEqual(null);
    })
    it ('should return the expected node', function () {
      expect( find.middleBig(odd) ).toEqual(expectedOdd);
      expect( find.middleBig(even) ).toEqual(expectedEven);
    })
    it ('should return null if any node has no value', function () {
      expect( find.middleBig(breakArray) ).toEqual(null);
    })
  })
})
