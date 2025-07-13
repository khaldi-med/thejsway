'use strict'

// Load the Express package as a module
const express = require('express');
// const path = require('path');
 
// Access the exported service
const app = express();

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('views'));

// Handle form submission
app.post('/submit', (req, res) => {
    console.log('Received form data:', req.body);
    
    const { t_shirt, color } = req.body;
    
    // Handle the response
    const response = {
        success: true,
        message: `You bought a T-shirt size: ${t_shirt || 'Not selected'}, color: ${color || 'Not selected'}`
    };
    
    res.json(response);
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
  console.log(`Open http://localhost:${listener.address().port} in your browser`);
});
