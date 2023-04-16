const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  let res = '';
  if (Object.keys(options).length == 1) {
    for (let i = 0; i < options.repeatTimes; i++) {
      res +=`${str}+`;
    } 
    return res.slice(0, res.length - 1);
  }
  else if (!options.repeatTimes) {
    res += str;
    res += options.addition;
    return res;
  }
  else {
    for (let i = 0; i < options.repeatTimes; i++) {
     res += str;
     for (let j = 0; j < options.additionRepeatTimes; j++) {
      res += options.addition;
      if (options.additionSeparator)  res += options.additionSeparator;
      }
        if (options.separator) {
        if (options.additionSeparator) {
          res = res.slice(0, res.length - options.additionSeparator.length);
        }
          res += options.separator;
     }  
    }
    if (options.separator) {
      let num = options.separator.length;
      res = res.slice(0, res.length - num);
      }
    return res;
  }
  }

module.exports = {
  repeater
};
