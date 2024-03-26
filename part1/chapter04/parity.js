const prompt = require('prompt-sync')();

const number = Number(prompt('Enter a number: '));

for (let i = number; i <= number +9; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
  else{
    console.log(`${i} is odd`);
  }
}
