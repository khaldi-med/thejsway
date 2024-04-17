"use strict";
const prompt = require("prompt-sync")();

const word = prompt("Enter a word: ");

const lowerCaseWord = word.toLowerCase();
const cleanWord = lowerCaseWord.replace(/[^a-z]/g, "");

let left = 0;
let right = cleanWord.length - 1;
let result = "The word is a palindrome";

while (left < right) {
  if (cleanWord[left] !== cleanWord[right]) {
    result = "The word is not a palindrome";
    break;
  }
  left++;
  right--;
}

console.log(result);
