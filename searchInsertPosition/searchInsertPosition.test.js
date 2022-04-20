const { test, expect } = require('@jest/globals');
const searchInsert = require('./searchInsertPosition.easy.js');

test('Example 1 - target is in the array', () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
});

test('Example 2 - target shuld have been in the middile of the arry', () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
});

test('Example 3 - target shuld have been over the end of the arry', () => {
  expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
});

test('Example 4 - invalid target', () => {
  expect(searchInsert([1, 3, 5, 6], 250)).toBeUndefined();
});
