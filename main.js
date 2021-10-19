const colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"];
const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const body = document.getElementsByTagName("body")[0];

btnStart.onclick = () => {
	const timerId = setTimeout(() => {
		body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
	}, 1000);
	btnStop.onclick = () => {
		clearTimeout(timerId);
	};
};
