'use strict';

let moment = require('moment');


let now = moment();
now.subtract({day: 26, month: 11, year: 1976});


let date = moment().format('dddd, MMMM Do YYYY');

console.log(date);

console.log(now.format('YY'), "year ago");
