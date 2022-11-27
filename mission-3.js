//Buttons
const showAllBtn = document.querySelector("#show-all-btn");
const showBasedOnPriceBtn = document.querySelector("#based-on-price-btn");
const showBasedOnCategoryBtn = document.querySelector("#show-based-on-category-btn");

//Options
const chooseCategory = document.querySelector("#category-select");
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");

//output
const outputDiv = document.getElementById("output-div");
const outputDivNumberOfBuildings = document.getElementById("output-div-number-of-buildings");
let htmlTxl = "";
let htmlTxl2 = "";
let countBuildings = 0;

//Bygninger vi har i vår katalog

const buildings = [
	{
		name: "Cutiepie - Cousy house for cousy people",
		price: 1000,
		imageName: "building-1.png",
		category: "Standard",
	},
	{
		name: "Tall and cute - Cousy house for tall people ",
		price: 2000,
		imageName: "building-2.png",
		category: "Standard++",
	},
	{
		name: "Double Decker - One floor for wife, one floor for your lover ",
		price: 10000,
		imageName: "building-3.png",
		category: "Standard++",
	},
	{
		name: "Double Door Castle - For the king and queen ",
		price: 20000,
		imageName: "building-4.png",
		category: "Castle",
	},
	{
		name: "Rumpeldunk - For the wizard ",
		price: 40000,
		imageName: "building-5.png",
		category: "Fantasy-castle",
	},
	{
		name: "Luxuary prison - The rich prisoner ",
		price: 80000,
		imageName: "building-6.png",
		category: "Fantasy-castle",
	},
];

//funksjoner for å løse diverse valg

function sortByCategory(type) {
	for (let i = 0; i < buildings.length; i++) {
		if (type === "--Velg kategori--") {
			htmlTxl2 = `Choose a category. You have choosen <b>${chooseCategory.value}</b> :)`;
			outputDivNumberOfBuildings.innerHTML = htmlTxl2;
			htmlTxl = "";
			outputDiv.innerHTML = htmlTxl;
			return;
		} else if (buildings[i].category === type) {
			countBuildings++;
			htmlTxl += `
            <article>
            <h1>${buildings[i].name}</h1>
            <img src="images/${buildings[i].imageName}">
            <ul>
            <li>Price: ${buildings[i].price}</li>
            <li>Category: ${buildings[i].category}</li>
            </ul>
            </article>
            
            `;
		}
	}
	outputDiv.innerHTML = htmlTxl;
	outputDivNumberOfBuildings.innerHTML = `Vi fant ${countBuildings} bygninger i denne kategori`;
}

function sortByPrice(minPrice, maxPrice) {
	if (minPrice === "" || maxPrice === "" || maxPrice < minPrice) {
		htmlTxl2 = "Fill out <b>Min Price</b>, <b>Max Price</b> and <b>Max Price</b> have to be lower than <b>Min Price</b> :)";
		outputDivNumberOfBuildings.innerHTML = htmlTxl2;
		htmlTxl = "";
		htmlTxl2 = "";
		outputDiv.innerHTML = htmlTxl;
		return;
	}
	for (let i = 0; i < buildings.length; i++) {
		if (buildings[i].price >= minPrice && buildings[i].price <= maxPrice) {
			htmlTxl += `
            <article>
            <h1>${buildings[i].name}</h1>
            <img src="images/${buildings[i].imageName}">
            <ul>
            <li>Price: ${buildings[i].price}</li>
            <li>Category: ${buildings[i].category}</li>
            </ul>
            </article>
            
            `;
		}
	}
	outputDiv.innerHTML = htmlTxl;
}

//buttons + 1 button med listener som viser alt

showAllBtn.addEventListener("click", () => {
	outputDiv.innerHTML = "";
	outputDivNumberOfBuildings.innerHTML = "";
	for (let i = 0; i < buildings.length; i++) {
		htmlTxl += `
        <article>
        <h1>${buildings[i].name}</h1>
        <img src="images/${buildings[i].imageName}">
        <ul>
        <li>Price: ${buildings[i].price}</li>
        <li>Category: ${buildings[i].category}</li>
        </ul>
        </article>
        
        `;

		outputDiv.innerHTML = htmlTxl;
	}
});

showBasedOnPriceBtn.addEventListener("click", () => {
	htmlTxl = "";
	sortByPrice(minPrice.value, maxPrice.value);
});

showBasedOnCategoryBtn.addEventListener("click", () => {
	countBuildings = 0;
	htmlTxl = "";
	sortByCategory(chooseCategory.value);
});
