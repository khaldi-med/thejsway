/*
Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.
*/

const prompt = require("prompt-sync")();

let r = prompt("Enter the radius of circle: ");

  const circumference = () => {
    let c = 2 * Math.PI * r;
    return c;
  }
  console.log(`The circumference is ${circumference()}`);

 const area = () => {
  let A = Math.PI * (r**2);
  return A;
  }

console.log(`The area is ${area()}`);
