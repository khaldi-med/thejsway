const prompt = require('prompt-sync')();

const hours = Number(prompt('Enter the hours: '));
const minutes = Number(prompt('Enter the minutes: '));
const seconds = Number(prompt('Enter the seconds: '));
if(!Number(hours) || !Number(minutes) || !Number(seconds)){
  console.log("Pleas enter a valid time");
}

else if(hours == 23 && minutes == 59 && seconds == 59){
  console.log('00h:00m:00s');
}
else if(minutes == 59 && seconds == 59) {
  console.log(`${hours + 1}h:00m:00s`);
}
else if (seconds == 59){
  console.log(`${hours}h:${minutes +1}m:00s`);
}
else{
  console.log(`${hours}h:${minutes}m:${seconds +1}s`)
}
