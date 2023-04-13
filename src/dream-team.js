const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let result = [];
  for (let elem of members) {
    if (typeof elem == 'string') {
      console.log(elem)
      let str = elem.replace(/\s+/g, '');
      result.push(str.substr(0, 1).toUpperCase());
    }
  }
  return result.sort().join('');
}

module.exports = {
  createDreamTeam
};
