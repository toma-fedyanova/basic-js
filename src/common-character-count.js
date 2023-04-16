const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let object1 = {};
  let object2 = {};
  
   for (let i = 0; i < s1.length; i++) {
     if (object1[s1[i]] == undefined) {
      object1[s1[i]] = 1;
     }
     else {
      object1[s1[i]]++;
     }
   }
   for (let j = 0; j < s2.length; j++) {
    if (object2[s2[j]] == undefined) {
     object2[s2[j]] = 1;
    }
    else {
     object2[s2[j]]++;
    }
  }
  let result = 0;
  console.log(object1);
  console.log(object2);
  for (let key in object1) {
   let char = key;
    for (let key in object2) {
      if (key == char) {
        console.log(key);
        result += Math.min(object2[key], object1[char]);
        }
      }
    }
     return result;
  }

module.exports = {
  getCommonCharacterCount
};
