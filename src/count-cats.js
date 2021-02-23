const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let newArr = matrix.flat();
  let number = 0;
  newArr.forEach(function(item, i, arr) {
    if (item === '^^') {
      number += 1;
    }
  });
  return number;
};
