// Write a program that asks the user for a raw price. 
// After that, it calculates the corresponding final price using a VAT rate of 20.6%.

const rawPrice = prompt("Enter the raw price:");
const finalPrice = rawPrice * 20.6;
console.log(`Your final price after tax is ${finalPrice}`);
