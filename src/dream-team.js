const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
if (Array.isArray(members)) {
    let firstLetters = '';

    members.forEach(function(item, index, array) {
        if (typeof item === "string") {
          firstLetters += item.trim().charAt(0);
        }
    });
    
    let result = firstLetters.toUpperCase().split('').sort().join('');
    return result;
} else {
    return false
}

};
