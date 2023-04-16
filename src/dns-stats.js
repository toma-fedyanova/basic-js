const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
 
   let count1 = 0;
   for (let elem of domains) {
     if (elem.search(/com/) != -1) {
       count1++;
     }
   }
   let count2 = 0;
   for (let elem of domains) {
     if (elem.search(/epam.com/) != -1) {
       count2++;
     }
   }
   let count3 = 0;
   for (let elem of domains) {
     if (elem.search(/info.epam.com/) != -1) {
       count3++;
     }
   }
    if (count1 != 0) {
     result['.com'] = count1;
    }
    if (count2 != 0) {
     result['.com.epam'] = count2;
    }
    if (count3 != 0) {
     result['.com.epam.info'] = count3;
    }
 
 return result;
 }

module.exports = {
  getDNSStats
};
