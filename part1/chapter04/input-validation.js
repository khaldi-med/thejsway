const prompt = require('prompt-sync')();
while (true) {
  const number = Number(prompt("Enter a number between 50 and 100 (inclusive): "));

  if (number <= 100 && number >= 50) {
    console.log("You entered a valid number. Exiting loop.");
    break;
  } else {
    console.log("Enter a number less than or equal to 100.");
  }
}
