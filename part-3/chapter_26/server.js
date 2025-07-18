'use strict';

const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();
const upload = multer();

// Enable CROS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

// Parse URL-encoded bodies (form data)
app.use(bodyParser.urlencoded({ extended: true }));
// Parse JSON bodies
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/addlink', upload.array(), (req, res) => {
  const { author, url, title } = req.body;
  const response = {
    message: `The link ${title} has been successfully added!`,
  };
  res.send(response);
  console.log(
    `Link with title: ${title}, author: ${author}, URL: ${url} has added!`,
  );
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
  console.log(
    `Open http://localhost:${listener.address().port} in your browser`,
  );
});
