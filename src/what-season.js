const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null) return 'Unable to determine the time of year!';
  if (date instanceof Date) {
    if (Object.prototype.toString.call(date) !== '[object Date]') {
      throw new Error('THROWN');
    }
  
    let month = date.getMonth();
  
    if (month > 1 && month < 5 ) {
      return 'spring'
    } else if (month > 4 && month < 8 ) {
      return 'summer'
    } else if (month > 7 && month < 11 ) {
      return 'autumn'
    }
    else {
      return 'winter'
    }
  }

  throw new Error('Error')
};
