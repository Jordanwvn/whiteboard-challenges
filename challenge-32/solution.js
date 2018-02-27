'use strict';

const fib = module.exports = {};

// fib.recurse = (index, arr=[0, 1]) => !index ? arr[0] : fib.recurse(--index, [arr[1], (arr[0] + arr[1])]);

fib.recurse = (index, arr=[0, 1]) => {
  if (typeof index !== 'number' || index < 0) return null;
  return !index ? arr[0] : fib.recurse(--index, [arr[1], (arr[0] + arr[1])]);
}

fib.iterate = (index) => {
  if (typeof index !== 'number' || index < 0) return null;
  let arr = [0, 1];

  for (let count = index; count; count--) {
    let temp = arr[1];
    arr[1] = arr[0] + arr[1];
    arr[0] = temp;
  }
  return arr[0];
}
