const prompt = require("prompt-sync")();
while (true) {
  const number = Number(prompt("Enter a number: "));

  if (number <= 9 && number >= 2) {
    console.log("The multiplication table for this number is: ");
    let table; 
    let i = 2;
    while (i <= 9) {
      table = number * i;
      i++;
      console.log(table);
    }
    break;
  } else {
    console.log("Enter a valide number bettwin 9 and 2.");
  }
}
