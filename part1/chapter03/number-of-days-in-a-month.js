const prompt = require('prompt-sync')();

const monthNumber = prompt('Enter a month number: ');

if ((monthNumber == 1) || (monthNumber == 3) || (monthNumber == 5) || (monthNumber == 7) || (monthNumber == 8 ) || (monthNumber == 10) || (monthNumber == 12)) {
  console.log('The days of this month is 31.');
}
else if((monthNumber == 4) || (monthNumber == 6) || (monthNumber == 6) || (monthNumber == 9) || (monthNumber == 11)) {
  console.log('The days of this month is 30.');
}
else {
  console.log('Pleaase enter a valid month number.');
}
