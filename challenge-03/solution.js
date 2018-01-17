'use strict';

const solution = module.exports = {};

// ITERATIVE
solution.traverse = (engine) => {
  if (typeof engine !== 'object') return null;
  let current = engine;
  let total = 0;
  for (current = engine; current.next; current = current.next) {
    if (typeof current.value !== 'number' || current.value < 0) return null;
    total += current.value;
  }
  total += current.value;
  return total;
}

// RECURSIVE
solution.recursiveTraverse = (car) => {
  return ( typeof car !== 'object' || typeof car.value !== 'number' || car.value < 0 ) ? null
  : car.next ? car.value + solution.recursiveTraverse (car.next)
  : car.value
}
