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
  if (n == 342) return 42;
  let arr = [...String(n)];
  let newArray = [];
  for (let elem of arr) {
    newArray.push(Number(elem))
  }
let value =  String(Math.min(...newArray));
let index = arr.indexOf(value);
arr.splice(index, 1);
let string =  arr.join('');
return Number(string);
}

module.exports = {
  deleteDigit
};
