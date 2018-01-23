'use strict';

const linkedList = require('../index.js');

describe('LINKED LIST MODULE', function () {

  // circular
  let circularList = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
  circularList.next.next.next = circularList;

  // straight
  let endingList = {value: 1, next: {value: 2, next: {value: 3, next: null}}};

  describe('Checking if a list is looped', function () {
    it('should return false if the list has an end', function () {
      expect( linkedList.circleCheck(circularList) ).toBe(true)
    })
    it('should return true if the list is circular', function () {
      expect( linkedList.circleCheck(endingList) ).toBe(false)
    })
    it('should return null if the argument passed in is not a list', function () {
      expect( linkedList.circleCheck('this is not a linked list') ).toBe(null);
    })
  })
})
