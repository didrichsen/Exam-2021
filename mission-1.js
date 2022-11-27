//Import HTML elements and create variables

const Inputwidth = document.getElementById("width-txt");
const inputHeight = document.getElementById("height-txt");
const inputColor = document.getElementById("background-color-txt");
const inputLeft = document.getElementById("left-txt");
const InputTop = document.getElementById("top-txt");
const inputClear = document.getElementById("clear-btn");

const outputDiv = document.getElementById("output-div");

const numberOfBoxes = document.getElementById("status-p");

const outputBtn = document.getElementById("add-box-btn");

//Counter to count number of artworks created
let counter = 0;

//function for adding artwork
function addArtWork(height, width, color, left, top) {
	const newDiv = document.createElement("div");
	outputDiv.append(newDiv);
	newDiv.style.height = `${height}px`;
	newDiv.style.width = `${width}px`;
	newDiv.style.backgroundColor = `${color}`;
	newDiv.style.left = `${left}px`;
	newDiv.style.top = `${top}px`;
	countBoxes();
}

//Adding eventlistener buttons
outputBtn.addEventListener("click", () => {
	counter++;
	addArtWork(inputHeight.value, Inputwidth.value, inputColor.value, inputLeft.value, InputTop.value);
});

//So you can add artwork by pressing Enter
window.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		counter++;
		addArtWork(inputHeight.value, Inputwidth.value, inputColor.value, inputLeft.value, InputTop.value);
	}
});

//function for counting artworks and checking if user has emptyed the "Art Maker"
function countBoxes() {
	if (outputDiv.innerHTML === "") {
		counter = 0;
		numberOfBoxes.innerHTML = `<p>Number of boxes added: ${counter}</p>`;
	}
	numberOfBoxes.innerHTML = `<p>Number of boxes added: ${counter}</p>`;
}

//Remove artworks
function clearArtMaker() {
	outputDiv.innerHTML = "";
	countBoxes();
}

inputClear.onclick = clearArtMaker;

countBoxes();
