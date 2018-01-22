'use strict';

const loop = require( '../index.js');

describe('RECURSE MODULE', () => {
  describe('# recursive callback loop', () => {

    let validCallback = function () {
      return 'hello';
    }

    it( 'should return null if count is not a number', () => {
      expect( loop('count', validCallback) ).toEqual( null );
    });
    it( 'should return null if count is negative', () => {
      expect( loop(-1, validCallback) ).toEqual( null );
    });
    it( 'should return null if callback is not a function', () => {
      expect( loop(10, 'callback') ).toEqual( null );
    });
    it( 'should call the callback function [count] amount of times', () => {
      var x = 0;
      loop (10, () => x++ );
      expect(x).toEqual(10);
      expect( loop(10, () => x++) ).toEqual(undefined);
    });
  });
});
