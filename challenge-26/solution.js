'use strict';

const utils = module.exports = {};

utils.map = (arr, callback, thisArg) => {
  if (thisArg) callback = callback.bind(thisArg);

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push( callback(arr[i], i, arr) );
  }
  return result;
}

utils.filter = (arr, callback, thisArg) => {
  if (thisArg) callback = callback.bind(thisArg);

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr) === true) result.push(arr[i]);
  }
  return result;
}

utils.reduce = (arr, callback, initialValue) => {
  let newArr = [initialValue, ... arr];
  let start = initialValue ? 0 : 1;

  for (var result, i = start; i < newArr.length; i++) {
    i === start ? result = newArr[start]
      : result = callback(result, newArr[i], i, arr);
  }
  return result;
}
