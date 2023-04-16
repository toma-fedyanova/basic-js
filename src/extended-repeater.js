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
  else if ((str == options.addition) && (String(str) != 'null')) {
    for (let i = 0; i < options.repeatTimes; i++) {
      res +=str;
      res += str;
      res += '+';
    } 
    return res.slice(0, res.length - 1);
  }
  else {
    for (let i = 0; i < options.repeatTimes; i++) {
     res += str;
     for (let j = 0; j < options.additionRepeatTimes; j++) {
      res += options.addition;
      if (options.additionSeparator)  res += options.additionSeparator;
      else if (!options.additionSeparator && !options.separator)  res += '|';
      else if (!options.additionSeparator) res += '|';   ////
      }
        if (options.separator) {
        if (options.additionSeparator) {
          res = res.slice(0, res.length - options.additionSeparator.length);
        }
        if (!options.additionSeparator && (Object.keys(options).length != 2)) {          ////
          res = res.slice(0, res.length - 1);
        }
          res += options.separator;
     }  
     else if (!options.additionSeparator && !options.separator) {  //
      res = res.slice(0, res.length - 1);
      res += '+';
     }
     else if (!options.separator && options.additionSeparator) {  ///
    
      res = res.slice(0, res.length - options.additionSeparator.length);
      res += '+';
    }
    }
    if (options.separator) {
      let num = options.separator.length;
      res = res.slice(0, res.length - num);
      }
      else if (!options.additionSeparator && !options.separator) {  //
        res = res.slice(0, res.length - 1);
        
       }
       else if (!options.separator && options.additionSeparator) {  ///
        res = res.slice(0, res.length - 1);
        }
    return res;
  }
  }

module.exports = {
  repeater
};
