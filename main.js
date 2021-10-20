const colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"];
const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const body = document.querySelector("body");

const timer = {
	intervalId: null,
	isActive: false,

	start() {
		if (this.isActive) {
			return;
		}
		this.isActive = true;

		this.intervalId = setInterval(() => {
			body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
		}, 1000);
	},

	stop() {
		clearInterval(this.intervalId);
		this.isActive = false;
	},
};

btnStart.addEventListener("click", () => {
	timer.start();
});
btnStop.addEventListener("click", () => {
	timer.stop();
});
