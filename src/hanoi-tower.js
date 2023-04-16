const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi (disksNumber, turnsSpeed) {
  let obj = {
    turns: 0,
    seconds: 0
  }
    let turns = 2 ** disksNumber - 1;
    obj.turns = turns;
    

    let seconds = 3600 / turnsSpeed * turns;
    obj.seconds = Math.floor(seconds);

    return obj;
} 

module.exports = {
  calculateHanoi
};
