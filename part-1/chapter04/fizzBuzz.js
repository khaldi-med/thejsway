//FizzBuzz


let i = 1;
while(i <= 100){
  if((i % 3 == 0) && (i % 5 !== 0)){
  console.log(` ${i} is => Fizz`);
  }
  else if((i % 5 == 0 )&& (i % 3 !== 0)){
    console.log(` ${i} is => Buzz`);
  }
  else if (i % 3 == 0 && i % 5 == 0){
  console.log(` ${i} is => FizzBuzz`);
  }
  i++;
}
