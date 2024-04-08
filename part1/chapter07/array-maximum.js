const values = [3, 11, 7, 2, 9, 10];
let maxNum = 0;

for(let i = 0; i < values.length; i++){
  if(values[i] > maxNum){
    maxNum = values[i];
  }
}

console.log(maxNum)
