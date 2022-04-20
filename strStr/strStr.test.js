const { test, expect } = require('@jest/globals');
const strStr = require('./strStr.easy.js');
const strStr2 = require('./strStr.easy.js');

test("Example 1 - needle is in haystack's start", () => {
  expect(strStr('aaaaa', 'a')).toBe(0);
});

test('Example 2 - needle is in the middile of haystack', () => {
  expect(strStr('hellow', 'll')).toBe(2);
});

test('Example 3 - needle is not is haystack', () => {
  expect(strStr('hellow', 'llp')).toBe(-1);
});

test('Example 4 - invalid needle', () => {
  expect(strStr('hellow', '')).toBe(0);
});

test("Example 1 - needle is in haystack's start", () => {
  expect(strStr2('aaaaa', 'a')).toBe(0);
});

test('Example 2 - needle is in the middile of haystack', () => {
  expect(strStr2('hellow', 'll')).toBe(2);
});

test('Example 3 - needle is not is haystack', () => {
  expect(strStr2('hellow', 'llp')).toBe(-1);
});

test('Example 4 - invalid needle', () => {
  expect(strStr2('hellow', '')).toBe(0);
});
