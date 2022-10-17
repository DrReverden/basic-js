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
  if (date === undefined ) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || (date.hasOwnProperty('toString'))) {
    throw new Error('Invalid date!');
  }

  if ((date.getMonth() + 1) > 2 && (date.getMonth() + 1) < 6) {
    return 'spring';
  } else if ((date.getMonth() + 1) > 5 && (date.getMonth() + 1) < 9) {
    return 'summer';
  } else if ((date.getMonth() + 1) > 8 && (date.getMonth() + 1) < 12) {
    return 'autumn';
  } else {
    return 'winter';
  }
}

module.exports = {
  getSeason
};
