const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const middle = require('../middle');

describe('#middleTest',() => {
  it('should return a empty array when passing an array of length less than 2', () => {
    assert.deepEqual(middle([1]),[]);
  })

  it('should return a empty array when passing an array of length less than 2', () => {
    assert.deepEqual(middle([1,2]),[]);
  })

  it('should return the element at the middle index if the length of the array is odd' , () => {
    assert.deepEqual(middle([1, 2, 3]),[2]);
  })

  it('should return the element at the middle index if the length of the array is odd' , () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]),[3]);
  })

  it('should return the element at the middle 2 index if the length of the array is even' , () => {
    assert.deepEqual(middle([1, 2, 3, 4]),[2, 3]);
  })

  it('should return the element at the middle index if the length of the array is odd' , () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
  })
})