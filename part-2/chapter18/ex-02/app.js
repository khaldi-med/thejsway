const start = document.getElementById("start");
const movment = 5;
const ball = document.getElementById("ball");
const farm = document.getElementById("frame");

const moveBall = () => {
	start.addEventListener("click", () => {
		start.disabled = true;
		stop.disabled = false;

		const xBloc = parseFloat(getComputedStyle(ball).left);
		ball.style.left = xBloc + movment + "px";
		animationId = requestAnimationFrame(moveBall);
	});
};
let animationId = requestAnimationFrame(moveBall);

const stop = document.getElementById("stop");
const stopBall = () => {
	stop.addEventListener("click", () => {
		stop.disabled = true;
		start.disabled = false;
		cancelAnimationFrame(animationId);
	});
};
