const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' }) {
  let additStr = '';
  let mainStr = '';

  let mainArr = [];
  let additArr = [];

  let timeMain = repeatTimes;
  let timeAddit = additionRepeatTimes;

  if(typeof timeMain == "undefined") {
    timeMain = 1;
  }

  if(typeof timeAddit == "undefined") {
    timeAddit = 1;
  }

  for(let i = 1; i <= timeAddit; i++) {
    additArr.push(String(addition));
  }

  additStr = additArr.join(String(additionSeparator) || '|');


  for(let i = 1; i <= timeMain; i++) {

    mainArr.push(str + additStr);
  }


  mainStr = mainArr.join(String(separator) || '+');

  return mainStr;

};
  