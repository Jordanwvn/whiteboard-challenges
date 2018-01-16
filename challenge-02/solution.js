'use strict';


/***** SOLUTION *****/


let topTwo = function (arr) {
  let allNumbers = true; // let's assume all array items are numbers
  arr.forEach( function(x) { // for each number in the array...
    if ( isNaN(x) ) {allNumbers = false} // are any of them false?
  } );

  return arr.length < 2 ? null // if the array isn't long enough, return null
  : Array.isArray (arr) === false ? null // if the input isn't an array, return null
  : allNumbers === false ? null // if any of the array items weren't numbers, return null
  : { // otherwise, return an object with these properties:
      one: arr.sort( function (a, b) {return b - a} ) [0], // the highest number
      two: arr.sort( function (a, b) {return b - a} ) [1] // the second highest number
    }
} // end function


/***** TESTS *****/


describe ('topTwo module', function () {

  describe ('#topTwo', function () {

    it ('should return an object with the highest two numbers as properties', function () {
      expect ( topTwo([1, 2, 3, 4, 5]) ).toEqual({one: 5, two: 4});
      expect ( topTwo([-2, -1, 0, 1, 2])).toEqual({one: 2, two: 1});
      expect ( topTwo([1, 2.2, 3.33, 4.444, 5.5555]) ).toEqual({one: 5.5555, two: 4.444});
    });

    it ('should return null for non-numeric input', function () {
      expect ( topTwo([1, 2, 3, 'd', 5]) ).toEqual(null);
    });

    it ('should return null if the argument passed is not an array', function () {
      expect ( topTwo(1, 2, 3, 4, 5) ).toEqual(null);
    });

    it ('should be at least a length of two', function () {
      expect ( topTwo([1]) ).toEqual(null);
    });
    
  });
});
