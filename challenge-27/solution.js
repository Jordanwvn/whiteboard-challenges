'use strict';

module.exports = (arr) => {
  if (!(arr instanceof Array)) return null;
  let result = [[], [], []];

  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr.length; y++) {
      if (arr[arr.length - y - 1][x] === null) return null;
      result[x].push(arr[arr.length - y - 1][x])
    }
  }
  return result;
}
