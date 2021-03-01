const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(mod){
    this.mod = mod
  }


  encrypt(message, key) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let UppMessage = message.toUpperCase();
    let UppKey = key.toUpperCase();

    let fullKey = '';

    let UppKeyNum = [];
    let MessageNum = [];

    let resultNum = [];
    let resultChar = [];

    if (UppKey.length < UppMessage.length) {
      for(let i = 0; i < UppMessage.length; i++) {
          if(i < UppKey.length){
            fullKey += UppKey[i];
          } else {
            fullKey += UppKey[ i % UppKey.length];
          }
        
        if(alphabet.indexOf(UppMessage[i]) === -1){
            MessageNum[i] = UppMessage[i];
            continue;
        }

        MessageNum[i] = alphabet.indexOf(UppMessage[i]);  
        
      }

      for(let i = 0; i < fullKey.length; i++) {
        UppKeyNum[i] = alphabet.indexOf(fullKey[i]); 
        }

    }

    for(let i = 0; i < UppMessage.length; i++) {
        if(alphabet.indexOf(UppMessage[i]) === -1 ) {
            resultNum[i] = UppMessage[i];
            continue;
        }
        resultNum[i] = MessageNum[i] + UppKeyNum[i];

        resultNum = resultNum.map(function(item, index, array) {
            if(item > 25){
                return item = item - 26;
            }
            return item
        });
    }

    for(let i = 0; i < resultNum.length; i++) {
        if(alphabet.indexOf(UppMessage[i]) === -1 ) {
            resultChar[i] = UppMessage[i];
            continue;
        }
        resultChar[i] = alphabet[resultNum[i]]; 
    }

        let resultCrypt = resultChar.join('');
        return resultCrypt;
  } 
  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
