const outputDiv = document.getElementById("output");
const startGame = document.getElementById("randomNumberBtn");
const stats = document.getElementById("stats");

let randomNumber = 0;
let rightAnswers = 0;
let wrongAnswers = 0;

function generateRandomNumber() {
	stats.innerHTML = "";
	randomNumber = Math.floor(Math.random() * 1000000);
	outputDiv.innerHTML = randomNumber;
	setTimeout(clearOutput, 5000);
}

function clearOutput() {
	outputDiv.innerHTML = "";
	outputDiv.innerHTML = `<input type="text" id="inputUser">What number just showed?</input><button id="submitBtn">Submit</button>`;
	let inputUser = document.getElementById("inputUser");
	let submitBtn = document.getElementById("submitBtn");
	submitBtn.addEventListener("click", () => {
		checkAnswer(parseInt(inputUser.value));
	});
	console.log(inputUser.value);
}

function checkAnswer(guess) {
	if (guess === randomNumber) {
		rightAnswers++;
	} else {
		wrongAnswers++;
	}
	stats.innerHTML = `<h2>Wrong: ${wrongAnswers} & Righ: ${rightAnswers}.</h2> 
                       <h3>5 seconds and we go again!</h3>`;
	setTimeout(generateRandomNumber, 5000);
}

startGame.addEventListener("click", () => {
	generateRandomNumber();
	randomNumberBtn.remove();
});
