const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  throw new NotImplementedError('Not implemented');
  if (!(arr instanceof Array)) new Error (`${arr} no array`)
 let res = [];
 for (let elem of arr) {
  if (typeof elem == 'number' && elem < 10) {
    res.push(elem);
  }
 }
 return res;
}

module.exports = {
  transform
};
