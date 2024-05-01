const prompt = require('prompt-sync')();

const numb1 = prompt('Enter the first number: ');
const numb2 = prompt('Enter the second number: ');
if(numb1 > numb2) {
  console.log(numb1 + ' is greater than ' + numb2)
}
else {
  console.log(numb2 + ' is greater than ' + numb1)
}
