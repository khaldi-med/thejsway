'use strict'

fetch("https://swapi.dev/api/planets")
	.then(response => response.json())
	.then(planets => {
		console.log(planets));
	})
.catch(err => {
    console.error(err.message);
  });
