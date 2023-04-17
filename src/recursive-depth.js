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
    this.string = '';
    this.array = [];
    this.count = 0;
  }
  calculateDepth(arr) {
    this.string += JSON.stringify(arr);;

    for (let i = 0; i < this.string.length; i++) {
      if (this.string[i] == '[') {
        this.count++;
        this.array.push(this.count);
      }
      else if (this.string[i] == ']') {
            this.count = 1;
      }
    }
    let num = Math.max(...this.array);
    this.array = [];
    this.string = '';
    this.count = 0;
    return num;
  }
}

module.exports = {
  DepthCalculator
};
