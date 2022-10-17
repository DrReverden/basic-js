const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let string = n.toString();
  let result = 0;

  for (let i = 0; i < string.length; i++) {
    let cutNum = string.slice(0, i) + string.slice(i + 1, string.length);
    if (cutNum > result) {
      result = cutNum;
    }
  }
  return +result;
}

module.exports = {
  deleteDigit
};
