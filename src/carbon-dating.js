const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if(sampleActivity < 0 || sampleActivity == 0 || sampleActivity > MODERN_ACTIVITY) {
    return false;
  }

  if (typeof sampleActivity === 'string') {
    let sampleActivityCount = parseInt(sampleActivity);


    if ( isNaN(sampleActivityCount) ) {
      return false;
    
    }

    let result = Math.log(MODERN_ACTIVITY/sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
    let age = Math.ceil(result);

    return age;
  } else {
    return false;
  }

};
