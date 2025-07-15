'use strict';

// Load the Express package as a module
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();
const upload = multer();
const parse = bodyParser.json();

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

// Parse JSON bodies
app.use(parse);

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Handle form submission
app.post('/submit', upload.array(), (req, res) => {
  const { name, number } = req.body;

  // Handle the response
  const response = {
      message: `Your name is:  ${name || 'Not selected'}, and you visited: ${number || 'Not selected'} countries. keep traveling!`,
  };

  res.send(response);
  console.log(`Received name: ${name}, countries number: ${number}`);
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
  console.log(
    `Open http://localhost:${listener.address().port} in your browser`,
  );
});
