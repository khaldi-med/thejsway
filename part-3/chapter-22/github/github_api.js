'use strict'

fetch("http://api.openweathermap.org/data/2.5/weather?q=Bordeaux,fr&appid=YOUR_API_KEY&units=metric")
.then(respones => respones.json())
.then(content => console.log(content))
let info = document.getElementById("info");
info.textContent = "hello";

.catch(err => {
	console.error(err.message);
});



