/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */

const longestCommonPrefix = function (strs) {
  // return 'fl';
  let charIndex = 0;
  while (true) {
    const currentChar = strs[0][charIndex];
    for (let i = 0; i < strs.length; i++) {
      if (strs[i][charIndex] !== currentChar || currentChar === undefined) {
        return charIndex ? strs[0].slice(0, charIndex) : '';
      }
    }
    charIndex++;
  }
};

module.exports = longestCommonPrefix;
