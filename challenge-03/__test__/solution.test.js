'use strict';

const solution = require ('../solution.js');

let trainA = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

let trainB = {
  value: 1,
  next: {
    value: 'two',
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

let trainC = {
  value: -1,
  next: {
    value: 0,
    next: {
      value: 1,
      next: {
        value: 2,
        next: null
      }
    }
  }
}

describe ('solution module', function() {
  describe ('#traverse', function () {
    it ('should output the number of passengers in each train as console.log()s', function(){
      expect ( solution.traverse(trainA) ).toEqual(10);
    })
    it ('should return null if the argument passed in is not an object', function() {
      expect ( solution.traverse('train') ).toEqual(null);
    })
    it ('should return null if there are any non-numeric passenger values', function() {
      expect ( solution.traverse(trainB) ).toEqual(null);
    })
    it ('should return null if there are any negative passenger values', function() {
      expect ( solution.traverse(trainC) ).toEqual(null);
    })
  })
})
