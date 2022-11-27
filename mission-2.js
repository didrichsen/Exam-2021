const blueCar = document.getElementById("blue-car");
const greenCar = document.getElementById("green-car");
const redCar = document.getElementById("red-car");
const outputWinner = document.getElementById("output-div");
const startBtn = document.getElementById("start-btn");

let driveBlue = 0;
let driveGreen = 0;
let driveRed = 0;
let raceStart;

function driveCar() {
	driveBlue += Math.floor(Math.random() * 200 + 1);
	driveGreen += Math.floor(Math.random() * 200 + 1);
	driveRed += Math.floor(Math.random() * 200 + 1);
	blueCar.style.left = `${driveBlue}px`;
	greenCar.style.left = `${driveGreen}px`;
	redCar.style.left = `${driveRed}px`;
	checkForWinner(driveBlue, driveGreen, driveRed);
}

function checkForWinner(blue, green, red) {
	console.log(blue, red, green);
	if (blue >= 700) {
		clearInterval(raceStart);
		outputWinner.innerHTML = "Blue wins";
	} else if (green >= 700) {
		clearInterval(raceStart);
		outputWinner.innerHTML = "Green wins";
	} else if (red >= 700) {
		clearInterval(raceStart);
		outputWinner.innerHTML = "Red wins";
	}
}

startBtn.addEventListener("click", () => {
	raceStart = setInterval(driveCar, 2000);
});
