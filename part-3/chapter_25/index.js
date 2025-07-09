'use strict'

// Load the Express package as a module
const express = require('express');

// Access the exported service
const app = express();

app.get("/hello", (request, response) => {
  response.sendFile(`${__dirname}/views/hello.html`);
});

// Serve content of the "public" subfolder directly
app.use(express.static("public"));

// const bodyParser = require('body-parser');
// 
// // Access the JSON parsing service
// const jsonParser = bodyParser.json();
// 
// const cars = [
//   {
//     model: 'Peugeot',
//     color: 'blue',
//     registration: 2012,
//     checkups: [2015, 2017],
//   },
//   {
//     model: 'Citroën',
//     color: 'white',
//     registration: 1999,
//     checkups: [2003, 2005, 2007, 2009, 2011, 2013],
//   },
// ];
// 
// app.post('/api/cars', jsonParser, (request, response) => {
//   const cars = request.body;
//   response.send(`You sent me a list of cars: ${JSON.stringify(cars)}`);
// });

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
