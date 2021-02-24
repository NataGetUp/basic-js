const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
 let hanoiParam = {}; 
 hanoiParam.turns = 2 ** disksNumber - 1;
 hanoiParam.seconds = Math.floor(hanoiParam.turns * 3600 / turnsSpeed);
 return hanoiParam;
};
