const { test, expect } = require('@jest/globals');
const longestCommonPrefix = require('./longestCommonPrefix.easy');
const longestCommonPrefix2 = require('./longestCommonPrefix.easy');

test('Example 1', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
});

test('Example 2', () => {
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
});

test('Example 1', () => {
  expect(longestCommonPrefix2(['flower', 'flow', 'flight'])).toBe('fl');
});

test('Example 2', () => {
  expect(longestCommonPrefix2(['dog', 'racecar', 'car'])).toBe('');
});
