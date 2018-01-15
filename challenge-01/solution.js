'use strict';

let analyzeArray = function (arr) {
  return {
    max: Math.max.apply (null, arr),
    min: Math.min.apply (null, arr),
    avg: arr.reduce( (acc, cur) => acc + cur) / arr.length
  }
}
