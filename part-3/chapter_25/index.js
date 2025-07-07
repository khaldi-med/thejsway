'use strict';

// Load the Express package as a module
const express = require('express');

// Access the exported service
const app = express();

// Return a string for requests to the root URL ("/")
app.get('/', (request, response) => {
  response.send('Hello from Express!');
});

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
