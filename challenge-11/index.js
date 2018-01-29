'use strict';

// find the missing number in an unsorted array between 1 and 100

module.exports = function (arr) {
  if (arr.length !== 99) return null;
  arr = arr.sort( (a, b) => {return a - b} );
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i - 1] > 100 || arr[i - 1] < 0) return null;
    if (arr[i - 1] !== i) return i;
  }
}
