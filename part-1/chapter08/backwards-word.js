"use strict";
const prompt = require("prompt-sync")();

const word = prompt("Enter a word: ");

let i = word.length - 1;
let reverseWord = "";

while (i >= 0){
  reverseWord += word[i];
  i--;
}
console.log(reverseWord);

