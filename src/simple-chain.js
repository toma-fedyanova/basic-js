const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if ((!(typeof position == 'number')) || (position <= 0) || (String(typeof position) == 'NaN') || (position > this.getLength())) {
      throw new Error('You can\'t remove incorrect link!');
    }
    else {
      this.result.splice(position - 1, 1);
      return this;
    }
    
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
   let chain = this.result.join('~~');
   this.result = [];
   console.log(chain)
   return chain;
  }
};

module.exports = {
  chainMaker
};
