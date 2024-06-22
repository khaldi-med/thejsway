"use strict";

const controleButton = document.getElementById("action");
const second = document.getElementById("count");
let intervalId = null;

controleButton.addEventListener("click", () => {
	controleButton.textContent = "Stop";
	if (intervalId === null) {
		intervalId = setInterval(() => {
			second.textContent = parseInt(second.textContent) + 1;
		}, 1000);
	} else {
		clearInterval(intervalId);
		intervalId = null;
		controleButton.textContent = "Start";
	}
});
