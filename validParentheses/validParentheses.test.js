const { test, expect } = require('@jest/globals');
const isValid = require('./validParentheses.easy');

test('Valid string', () => {
  expect(isValid('({[()]{}})')).toBe(true);
});

test('Invalid string', () => {
  expect(isValid('(]')).toBe(false);
});
