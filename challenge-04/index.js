'use strict';

let intersect = module.exports = {};

intersect.report = (arrOne, arrTwo) => {
  let result = [];
  for (let i = 0; i < arrOne.length; i++) {
    for (let j = 0; j < arrTwo.length; j++) {
      if (arrOne[i] === arrTwo[j]) result.push(arrOne[i]);
    }
  }
  return result;
}
