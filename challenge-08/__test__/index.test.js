'use strict';

const intersect = require('../index.js');
const SLL = require('../lib/sll.js');
require('jest');

let listOne = new SLL();
listOne.insertEnd(9);
listOne.insertEnd(5);
listOne.insertEnd(7);

let listTwo = new SLL();
listTwo.insertEnd(5);
listTwo.insertEnd(2);
listTwo.insertEnd(7);

let nullList = {head: {value: null, next: {value: 3, next: null}}};

let correctResult = {head: { value: 5, next: { value: 7, next: null } } };

describe('#solution module', function() {
  it('should return null upon invalid input', function() {
    expect(intersect.find(null, null)).toBe(null);
  });
  it('should return null upon invalid list values', function() {
    expect(intersect.find(listOne, nullList)).toEqual(null);
    expect(intersect.find(nullList, listTwo)).toEqual(null);
  });
  it('should return with the correct answer with valid input', function() {
    expect(intersect.find(listOne, listTwo)).toEqual(correctResult);
  });
});
