const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let additStr = '';
  let mainStr = '';

  let mainArr = [];
  let additArr = [];

  let timeMain = options.repeatTimes;
  let timeAddit = options.additionRepeatTimes;

  if(typeof timeMain == "undefined") {
    timeMain = 1;
  }

  if(typeof timeAddit == "undefined") {
    timeAddit = 1;
  }

  for(let i = 1; i <= timeAddit; i++) {
    additArr.push(options.addition);
  }

  additStr = additArr.join(options.additionSeparator || '|');


  for(let i = 1; i <= timeMain; i++) {

    mainArr.push(str + additStr);
  }


  mainStr = mainArr.join(options.separator || '+');

  return mainStr;

};
  