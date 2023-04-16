const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (matrix[0][0] == 0 && matrix.length == 1) return 0;
  let res = 0;
for (let i = 0; i < matrix[0].length; i++) {

  res += matrix[0][i];
}
for (let i = 0; i < matrix[1].length; i++) {
  res += matrix[1][i];
} 
if (!matrix[1].includes(0)) {
  for (let i = 0; i < matrix[2].length; i++) {
    res += matrix[2][i];
  } 
}

  return res;
}

module.exports = {
  getMatrixElementsSum
};
