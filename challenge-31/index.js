'use strict';

const intersect = module.exports = (arr1, arr2) => { // O(n)

  // CREATE FIRST HASH TABLE
  let table1 = {};
  for (let i = 0; i < arr1.length; i++, table1[ arr1[i] ] = arr1[i]);

  // CREATE SECOND HASH TABLE
  let table2 = {};
  for (let i = 0; i < arr2.length; i++, table2[ arr2[i] ] = arr2[i]);

  // COMPARE BOTH HASH TABLES
  let result = [];
  for (let key in table1) if (table2[key]) result.push(table2[key]);

  return result;
}
