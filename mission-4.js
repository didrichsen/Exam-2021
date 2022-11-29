//Ongoing

const numberBtns = document.querySelectorAll("[data-number]");
const confirmBtn = document.getElementById("confirm");
const outputDiv = document.getElementById("outputDiv");

const atmObject = {
	pincode: "1234",
	balance: 2000,
	moneyImg: "fem-hundre-kroner.png",
};

let pinCode = ["*", "*", "*", "*"];
let htmlTxt = "";
let kode = "";

loggedIn = false;

function validate(pin) {
	if (pin === atmObject.pincode) {
		htmlTxt = "Correct! &#9989 ";
		loggedIn = true;
	} else {
		htmlTxt = "Wrong pin! &#9940  <b>Cancel<b> to try again.";
	}
	outputDiv.innerHTML = htmlTxt;
}

function addToDisplay() {
	if (loggedIn === false) {
		pinCode.push(this.innerHTML);
		console.log(pinCode);
		if (pinCode.length > 3) {
			pinCode.shift();
		}
	}
	txtToDisplay();
}

function txtToDisplay() {
	for (let i = 0; i < pinCode.length; i++) {
		htmlTxt += pinCode[i].toString();
		console.log(i);
		kode = htmlTxt;
	}
	outputDiv.innerHTML = htmlTxt;
	htmlTxt = "";
}

confirmBtn.addEventListener("click", () => {
	validate(kode);
});

numberBtns.forEach((button) => button.addEventListener("click", addToDisplay));

outputDiv.innerHTML = "Enter your pin (4 digits) &#9995";
