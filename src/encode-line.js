const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let resut = {};
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    if (resut[arr[i]] == undefined) {
      resut[arr[i]] = 1;
    }
    else {
      resut[arr[i]]++;
    }
  }

  for (let key in resut) {
    if (resut[key] !== 1) {
      string += resut[key];
    }
    string += key;
  }
  let letter = str[0];
  if (str.endsWith(letter)) {
    string = str[0];
    for (let key in resut) {
      if (key != str[0]) {
      string += resut[key];
      string += key;
    }
    }
    string += letter;
  }
return string;
}

module.exports = {
  encodeLine
};
