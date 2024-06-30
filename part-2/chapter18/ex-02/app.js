"use strict";

const ballElement = document.getElementById("ball");
const fram = document.getElementById("frame");

const widthBall = parseFloat(getComputedStyle(ball).width);
const minX = 0;
let direction = 1;
const moveByPx = 7;
let animationId = null;

const moveBall = () => {
	const xBallStart = parseFloat(getComputedStyle(ball).left);
	const maxFramWidth = parseFloat(getComputedStyle(frame).width);

	if (xBallStart + widthBall > maxFramWidth || xBallStart < minX) {
		direction *= -1;
	}
	ballElement.style.left = `${xBallStart + direction * moveByPx}px`;
	animationId = requestAnimationFrame(moveBall);
};

const startMove = document.getElementById("start");
const stopMove = document.getElementById("stop");

startMove.addEventListener("click", () => {
	startMove.disabled = true;
	stopMove.disabled = false;
	animationId = requestAnimationFrame(moveBall);
});

stopMove.addEventListener("click", () => {
	startMove.disabled = false;
	stopMove.disabled = true;

	cancelAnimationFrame(animationId);
});
