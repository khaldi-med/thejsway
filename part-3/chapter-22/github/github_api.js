'use strict'

fetch("https://api.github.com/users")
.then(respones => respones.json())
.then(user => console.log(user))

.catch(err => {
	console.error(err.message);
});



