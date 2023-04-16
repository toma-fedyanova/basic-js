const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: '',
  getLength() {
    return result.length;
  },
  addLink(value) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  
  },
  removeLink(position) {
    if (typeof position == 'string' || position <= 0) throw new Error('You can\'t remove incorrect link!')
    
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
