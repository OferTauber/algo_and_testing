const { test, expect } = require('@jest/globals');
const twoSum = require('./twoSum.easy.js');

test('Example 1', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toContain(0);
  expect(twoSum([2, 7, 11, 15], 9)).toContain(1);
  expect(twoSum([2, 7, 11, 15], 9).length).toBe(2);
});

test('Example 2', () => {
  expect(twoSum([3, 2, 4], 6)).toContain(1);
  expect(twoSum([3, 2, 4], 6)).toContain(2);
  expect(twoSum([3, 2, 4], 6).length).toBe(2);
});

test('Example 3', () => {
  expect(twoSum([3, 4, 3], 6)).toContain(0);
  expect(twoSum([3, 4, 3], 6)).toContain(2);
  expect(twoSum([3, 4, 3], 6).length).toBe(2);
});
