const prompt = require('prompt-sync')();

const number = Number(prompt('Enter a number: '));
let i = 50;
if(number >= 100){
  console.log('Enter a new one!');
}
else if (number <= 100){
  while(i <= 100){
    console.log(i)
    i++;
  }
}
