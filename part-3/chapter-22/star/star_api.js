'use strict'

fetch("https://swapi.dev/api/planets")
	.then(response => response.json())
	.then(planets => {
		planets.map(plant => console.log(plant.name));
	})
.catch(err => {
    console.error(err.message);
  });
