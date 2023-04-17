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

  if (!(arr instanceof Array)) return new Error ('\'arr\' parameter must be an instance of the Array!');
  else if (!(arr.includes('--double-next') && arr.includes('--double-prev') && arr.includes('--discard-next') && arr.includes('--discard-prev'))) return arr;
  else {
  let result = [];
 for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == 'number') result.push(arr[i])
  else if ((arr[i] == '--double-next') && arr[i + 1]) {
    result.push(arr[i + 1]);
  }
  else if ((arr[i] == '--double-prev') && arr[i - 1]) {
  result.push(arr[i - 1]);
  }
  else if ((arr[i] == '--discard-next') && arr[i + 1]) {
     i++;
  }
  else if ((arr[i] == '--discard-prev') && arr[i - 1]) {
    result.pop();
  }
 }
 return result;
}
}

module.exports = {
  transform
};
