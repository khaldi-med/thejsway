// Method 1
function calculate(a, operation, b){
  let result = 0;
  
  switch(operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      result = 0;
  }

  return result;
}


/*
//Method 2
function calculate(a, operations, b){
  let result = 0;
  
  if(operations == "+")
    result = a + b;
  else if(operations == "-")
    result = a - b;
  else if(operations == "*")
    result = a * b;
  else if(operations == "/")
    result = a / b;
  else
    result = 0;
  return result;
}
*/


//console.log(calculate(4, "+", 6));
//console.log(calculate(4, "-", 6));
//console.log(calculate(2, "*", 0));
//console.log(calculate(12, "/", 0));





