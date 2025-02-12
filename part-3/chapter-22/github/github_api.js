'use strict'

const formElemnt = document.addEventListener("submit", e => {
    e.apperDefault();
    const users = element.login.valu

fetch("https://api.github.com/users")
.then(respones => respones.json())
.then(user => console.log(user))

.catch(err => {
	console.error(err.message);
});



