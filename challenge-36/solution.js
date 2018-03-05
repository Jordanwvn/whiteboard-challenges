'use strict';

const compare = module.exports = (treeOne, treeTwo) => {
  if (typeof treeOne !== 'object' || typeof treeTwo !== 'object') return null;
  // false base case
  if (!!treeOne.left !== !!treeTwo.left || !!treeOne.right !== !!treeTwo.right) return false;
  // recursive case
  if (treeOne.left !== null && treeTwo.left !== null) return compare(treeOne.left, treeTwo.left);
  if (treeOne.right !== null && treeTwo.right !== null) return compare(treeOne.right, treeTwo.right);
  // true base case
  return true;
}
