const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  if (date instanceof Date == false) throw new Error('invalid date');
  if (!date.toLocaleString()) return false;
  try {
  let month = date.getMonth();
  if ((month <= 1)) return 'winter';
  else if (month == 11) return 'winter';
  else if ((month <= 4) && (month > 1)) return 'spring';
  else if ((month <= 7) && (month > 4)) return 'summer';
  else if ((month <= 10) && (month > 7)) return 'autumn';}
  catch(err) {
    return new Error('invalid date');
  }
  }

module.exports = {
  getSeason
};
