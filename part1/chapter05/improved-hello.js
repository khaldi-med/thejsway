const prompt = require("prompt-sync")();

 let firstName = prompt("What is your first name? ");
 let lastName = prompt("What is your last name? ");

const fullName = function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

console.log(fullName(firstName, lastName));
