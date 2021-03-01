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

      //Находим строку ключа, равную длине сообщения

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

      //Находим массив чисел сообщения
        MessageNum[i] = alphabet.indexOf(UppMessage[i]);  
        
      }

      //Находим массив чисел ключа
      for(let i = 0; i < fullKey.length; i++) {
        UppKeyNum[i] = alphabet.indexOf(fullKey[i]); 
        }


    //Находим числовой шифр (складываем числа ключа и сообщения)

    for(let i = 0, k = 0; i < UppMessage.length; i++) {
        if(alphabet.indexOf(UppMessage[i]) === -1 ) {
            resultNum[i] = UppMessage[i];
        } else {
          resultNum[i] = MessageNum[i] + UppKeyNum[k];
          k++
        }
    //Обрабатываем значения > 25
        resultNum = resultNum.map(function(item, index, array) {
            if(item > 25){
                return item = item - 26;
            }
            return item
        });
    }

    //Находим массив символов шифра

    for(let i = 0; i < resultNum.length; i++) {
        if(alphabet.indexOf(UppMessage[i]) === -1 ) {
            resultChar[i] = UppMessage[i];
            continue;
        }
        resultChar[i] = alphabet[resultNum[i]]; 
    }

    let resultCrypt = resultChar.join(''); 

    
    if (this.mod != false){
      return resultCrypt
    }
    return resultCrypt.split('').reverse().join('')
  } 



  decrypt(encryptedMessage, key) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let UppMessage = encryptedMessage.toUpperCase();
    let UppKey = key.toUpperCase();

    let fullKey = '';

    let UppKeyNum = [];
    let MessageNum = [];

    let resultNum = [];
    let resultChar = [];

      //Находим строку ключа, равную длине сообщения

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

      //Находим массив чисел сообщения
        MessageNum[i] = alphabet.indexOf(UppMessage[i]);  
        
      }

      //Находим массив чисел ключа
      for(let i = 0; i < fullKey.length; i++) {
        UppKeyNum[i] = alphabet.indexOf(fullKey[i]); 
        }


    //Находим числовой шифр (складываем числа ключа и сообщения)

    for(let i = 0, k = 0; i < UppMessage.length; i++) { 
      if(alphabet.indexOf(UppMessage[i]) === -1 ) {
          resultNum[i] = UppMessage[i];
      } else {
          if ((MessageNum[i] - UppKeyNum[k]) >= 0) {
              resultNum[i] = MessageNum[i] - UppKeyNum[k];
          }
          else {
              resultNum[i] = MessageNum[i] + 26 - UppKeyNum[k];
          }
        k++; 
      }
  }
    //Находим массив символов шифра

    for(let i = 0; i < resultNum.length; i++) {
        if(alphabet.indexOf(UppMessage[i]) === -1 ) {
            resultChar[i] = UppMessage[i];
            continue;
        }
        resultChar[i] = alphabet[resultNum[i]]; 
    }

    let resultCrypt = resultChar.join(''); 

    
    if (this.mod != false){
      return resultCrypt
    }
    return resultCrypt.split('').reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;
