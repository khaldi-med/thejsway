// A default value
let defaultCarousel = 10;
let turn = 1;

while (turn <= defaultCarousel){
  console.log(`Turn number: ${turn}`);
  turn++;
};

// Ask user for number of turns
const prompt = require('prompt-sync')();

let carouselNumber = prompt("How many carousel do you want?");

for(let turn = 1; turn <= carouselNumber; turn++){
  console.log(`Turn number: ${turn}`);
};
