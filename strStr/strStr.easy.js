const strStr = function (haystack, needle) {
  if (!needle) return 0;
  return haystack.indexOf(needle);
};

const strStr2 = function (haystack, needle) {
  if (!needle) return 0;
  let index = 0;
  while (haystack.length >= needle.length) {
    if (haystack.startsWith(needle)) return index;
    index++;
    haystack = haystack.slice(1);
  }

  return -1;
};

module.exports = strStr;
module.exports = strStr2;

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 *
 * @description {Implement strStr().

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strStr() and Java's indexOf().
}
 

Example 1:

Input : haystack = "hello", needle = "ll"
Output : 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
 */

// console.log('hellow'.indexOf('lw'));
