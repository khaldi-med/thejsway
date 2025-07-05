'use strict';

const traveler = {
  name: 'Sam',
  countries: [
    {
      name: 'Italy',
      year: 2022,
    },
    {
      model: 'Ireland',
      color: 2021,
    },
    {
      model: 'USA',
      color: 2021,
    },
  ],
};

fetch('https://thejsway-server.herokuapp.com/api/countries', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(traveler),
})
  .then((response) => response.text())
  .then((result) => {

    document.getElementById('result').textContent = result;
  })
  .catch((err) => {
    console.error(err.message);

  });
