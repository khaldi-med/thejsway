"use strict";
const prompt = require("prompt-sync")();

const word = prompt("Enter a word: ");

const vowels = ["a", "e", "i", "o", "u"];
let totalVowelCount = 0;
let i = 0;

while (i < word.length) {
  let j = 0;
  while (j < vowels.length) {
    if (word[i] === vowels[j]) {
      totalVowelCount++;
    }
    j++;
  }
  i++;
}

console.log("Total vowel count:", totalVowelCount);
