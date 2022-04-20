const isValid = function (s) {
  const stuck = [];
  const bracketsMap = new Map();
  bracketsMap.set(')', '(').set(']', '[').set('}', '{');

  for (let char of s) {
    if (char.match(/\(|\[|\{/g)) {
      stuck.push(char);
    } else {
      if (stuck.pop() !== bracketsMap.get(char)) return false;
    }
  }
  return true;
};

module.exports = isValid;

/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
