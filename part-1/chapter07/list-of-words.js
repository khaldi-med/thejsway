const prompt = require("prompt-sync")();

let words = [];

while (true) {
  const word = String(prompt("Enter a word: "));
  words.push(word);
  
  if (word === "stop") {
    words.splice((words.length - 1), 1);
    break;
  }
}
console.log(`Here is the words that you enter befor you find the word key: `);
console.log(words);

