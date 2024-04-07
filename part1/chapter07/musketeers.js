// Creates the array
const musketeers = ["Athos", "Porthos", "Aramis"]

//Shows each array element using a for loop.
for (let i = 0; i < musketeers.length; i++){
  console.log(musketeers[i])
}

//Adds the "D'Artagnan" value to the array.
musketeers.push("D'Artagnan");

//Shows each array element using the forEach() method.
musketeers.forEach(muskete => console.log(muskete))

//Remove poor Aramis.
musketeers.splice(2, 1)

//Shows each array element using a for-of loop.
for (const muskete of musketeers){
   console.log(muskete) 
}

