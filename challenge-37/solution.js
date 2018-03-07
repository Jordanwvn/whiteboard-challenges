'use strict';

const SLL = require('./sll.js');

const traverse = (node, callback) => {
  if (node) callback(node);
  if (node && node.left) traverse(node.left, callback);
  if (node && node.right) traverse(node.right, callback);
}

const convert = module.exports = (tree) => {
  if (typeof tree !== 'object') return null;

  let arr = [];
  let list = new SLL;

  traverse(tree.root, node => arr.push(node.value));

  // arr.sort();
  // console.log(arr);

  arr.sort().map(x => list.insertEnd(x));
  // for (let value in arr) {
  //   list.insertEnd(value);
  // }
  return list;
}
