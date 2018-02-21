'use strict';

let highestWord = (x) => {
  let highScore = 0;
  let finalWord;
  x = x.split(' ');
  for (let i = x.length - 1; i >= 0; i --) {
    let total = 0;
    for (let letter = 0; letter < x[i].length; letter ++) {
      total += x[i].charCodeAt(letter) - 96;
    }
    if (total > highScore) {
      highScore = total;
      finalWord = x[i];
    }
  }
  return finalWord;
}
