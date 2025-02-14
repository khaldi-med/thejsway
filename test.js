'use strict'

fetch("https://swapi.dev/api/planets/")
  .then(response => response.json()) // Translate JSON into JavaScript
  .then(content => {
    console.log(content);
  })
  .catch(err => {
    console.error(err.message);
  });
