// This is for make prompt fun work in node env.
// Use npm install prompt-sync to install prompt-sync
const prompt = require('prompt-sync')();

// Aske to enter a day
const day = prompt('Enter a day:');

// switch the first letter to upper case if it is not
const mutchTheDay = day[0].toUpperCase() + day.slice(1);

// print the next day 
switch(mutchTheDay){
    case "Monday":
        console.log("The next day is: Tuesday") ;
        break;
    case "Tuesday":
        console.log("The next day is: Wednesday");
        break;
    case "Wednesday":
        console.log( "The next day is: Thursday");
        break;
    case "Thursday":
        console.log("The next day is: Friday") ;
        break;
    case "Friday":
        console.log("The next day is: Saturday") ;
        break;
    case "Saturday":
        console.log("The next day is: Sunday") ;
        break;
    case "Sunday":
        console.log("The next day is: Monday") ;
        break;
    default:
        console.log("Invalid day");
}
