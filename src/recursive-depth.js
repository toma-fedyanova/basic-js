const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.value = 0;
    this.count = 0;
  }
  calculateDepth(arr) {
    for (let elem of arr) {
      if (typeof elem == 'object') {
          this.count++;
          this.count+=this.calculateDepth(elem);
      }
      else{
        if (this.value <= this.count) {
          this.value = this.count;
        }
      }
    }
    return this.value + 1;
  }
}

module.exports = {
  DepthCalculator
};
