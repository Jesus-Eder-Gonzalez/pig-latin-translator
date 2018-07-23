'use strict';

function englishTranslator(str) {

  let isString = typeof str === 'string' ? true : false;

  if (!isString) {
    return process.stdout.write(`This program only takes in strings.`);
  }

  let wordArr = str.match(/[' ']/) ? str.split(' ') : str;
  // console.log(wordArr);
  let isArray = Array.isArray(wordArr);
  let pigArr = isArray ? wordArr.map(englishToPig) : englishToPig(wordArr);

  pigArr = isArray ? pigArr.join(' ') : pigArr;
  console.log(pigArr);
  return pigArr;

  function englishToPig(wordStr) {
    let firstVowel = wordStr.match(/[a,e,i,o,u]/i);
    let index = wordStr.indexOf(firstVowel);
    if (!firstVowel || index === 1) {
      return `${wordStr}-ay`;
    }
    
    firstVowel = wordStr.match(/[a,e,i,o,u,y]/i);
    index = wordStr.indexOf(firstVowel);
    let firstHalf = wordStr.slice(0, index);
    let secondHalf = wordStr.slice(index);
    return `${secondHalf}-${firstHalf}ay`
  }

}

function pigLatinTranslator(str) {

  let isString = typeof str === 'string' ? true : false;

  if (!isString) {
    return process.stdout.write(`This program only takes in strings.`);
  }

  let wordArr = str.match(/[' ']/) ? str.split(' ') : str;
  // console.log(wordArr);
  let isArray = Array.isArray(wordArr);
  let pigArr = isArray ? wordArr.map(pigToEnglish) : pigToEnglish(wordArr);

  pigArr = isArray ? pigArr.join(' ') : pigArr;
  console.log(pigArr);
  return pigArr;

  function pigToEnglish(wordStr) {
    let wordSplit = wordStr.split('-');
    if (!wordSplit[1] === 'ay') {
      return `${wordSplit[0]}`;
    }

    let firstHalf = wordSplit[1].slice(0, wordSplit[1].length - 2);
    let secondHalf = wordSplit[0].slice(0);
    return `${firstHalf}${secondHalf}`;
  }

}

module.exports = {
  toPig: englishTranslator,
  toEnglish: pigLatinTranslator
}

// pigLatinTranslator(englishTranslator('hello eat a banana from the trash'));
// pigLatinTranslator(englishTranslator('Hello, please eat a banana from the trash.'));
// englishTranslator('hello');
// englishTranslator('eat');
// englishTranslator('banana');
// englishTranslator('trash');
// englishTranslator('happy');
// englishTranslator('omelet');
// englishTranslator('are');
// englishTranslator('duck');
// englishTranslator('glove');
// englishTranslator('you');

