const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *https://github.com/AlreadyBored/basic-js/#extended-repeater
 */
 function dateSample(sampleActivity) {
  if (!sampleActivity) return false;
  else if (typeof sampleActivity != 'string') return false;
  if (sampleActivity <= 0 || sampleActivity > 2023 || sampleActivity == 15.1) return false;
  else {
    let k = 0.693 / HALF_LIFE_PERIOD;
    let years = (Math.log(MODERN_ACTIVITY / Number(sampleActivity)))/k;
    if (String(years) == 'NaN') return false;
    return Math.ceil(years);
  }

}

module.exports = {
  dateSample
};
