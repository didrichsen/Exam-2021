const enterBtn = document.getElementById("enterBtn");
const input = document.getElementById("inputField");
const outputDiv = document.getElementById("outputDiv");
const radioButtons = document.getElementById("radioButtons");

let htmlTxt = "";
let imgCollection;
let inputBtn;
let writtenInput;

const atmData = {
	pinCode: 1234,
	balance: 2000,
	withdraw: 0,
	moneyImg: ["fem-hundre-kroner.png", "fem-hundre-kroner.png", "fem-hundre-kroner.png", "fem-hundre-kroner.png"],
};

function validate(pin) {
	if (pin === atmData.pinCode) {
		input.value = "Logged in!";
		radioButtons.innerHTML = `<input id="writtenInput" type="text" placeholder="Enter amount"></input><button id="inputBtn">Withdraw</button><p>Enter amount (500,1000,1500,2000) or click image to withdraw.`;
		inputBtn = document.getElementById("inputBtn");
		writtenInput = document.getElementById("writtenInput");
		inputBtn.addEventListener("click", () => {
			writtenWithdraw(parseInt(writtenInput.value));
		});
		balance();
	} else {
		input.value = "";
		input.placeholder = "****";
		outputDiv.innerHTML = `Wrong password. Try again!`;
	}
}

function balance() {
	for (let i = 0; i < atmData.moneyImg.length; i++) {
		htmlTxt += `<img src=images/${atmData.moneyImg[i]}>`;
	}
	imgCollection = document.getElementsByTagName("img");
	outputDiv.innerHTML =
		`<h2>Your balance is ${atmData.balance},-  Your withdraw is a total of ${atmData.withdraw},-</h2><h3>Click on image to withdraw:</h3>` +
		htmlTxt;
	addListener();
	htmlTxt = "";
}

function addListener() {
	for (let image of imgCollection) {
		image.addEventListener("click", () => {
			withdraw();
		});
	}
}

function writtenWithdraw(amount) {
	if (amount === 500 || amount === 1000 || amount === 1500 || amount === 2000) {
		writtenInput.style.border = "2px solid green";
		switch (amount) {
			case 500:
				if (atmData.balance >= 500) {
					atmData.balance -= amount;
					atmData.withdraw += amount;
					atmData.moneyImg.splice(0, 1);
				} else {
					writtenInput.value = "Not enough money";
					writtenInput.style.border = "2px solid red";
				}
				break;
			case 1000:
				if (atmData.balance >= 1000) {
					atmData.balance -= amount;
					atmData.withdraw += amount;
					atmData.moneyImg.splice(0, 2);
				} else {
					writtenInput.value = "Not enough money";
					writtenInput.style.border = "2px solid red";
				}
				break;
			case 1500:
				if (atmData.balance >= 1500) {
					atmData.balance -= amount;
					atmData.withdraw += amount;
					atmData.moneyImg.splice(0, 3);
				} else {
					writtenInput.value = "Not enough money";
					writtenInput.style.border = "2px solid red";
				}
				break;
			case 2000:
				if (atmData.balance === 2000) {
					atmData.balance -= amount;
					atmData.withdraw += amount;
					atmData.moneyImg.splice(0, 4);
				} else {
					writtenInput.value = "Not enough money";
					writtenInput.style.border = "2px solid red";
				}
				break;
		}
	} else writtenInput.style.border = "2px solid red";
	balance();
}

enterBtn.addEventListener("click", () => {
	validate(parseInt(input.value));
});

function withdraw() {
	if (atmData.balance === 0) return;
	atmData.moneyImg.pop();
	atmData.balance -= 500;
	atmData.withdraw += 500;
	balance();
}
