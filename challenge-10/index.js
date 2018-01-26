'use strict';

const searches = module.exports = {}

// searches a sorted array for value n and returns {value, index}
searches.binary = function (n, sortedArray) {
  if (typeof n !== 'number' || typeof sortedArray !== 'object') return null;
  let top = sortedArray.length - 1;
  let bot = 0;
  let mid;
  while (bot <= top) {
    mid = ~~((top + bot) / 2);
    if (sortedArray[mid] === n) return {value: n, index: mid};
    if (sortedArray[mid] < n) bot = mid + 1;
    if (sortedArray[mid] > n) top = mid - 1;
  }
  return null;
}

// searches a string for matching pairs of braces and returns true or false
searches.matchingBraces = function (str) {
  if (typeof str !== 'string') return false;
  let stack = [];
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '{') stack.push(strArr[i])
    if (strArr[i] === '}') {
      if (!stack[0]) return false;
      stack.pop();
    }
  }
  return !stack[0];
}
