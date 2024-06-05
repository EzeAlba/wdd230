const modified = document.querySelector(".lastModified");
let currentDate = new Date(document.lastModified);
let formattedDate = currentDate.toLocaleString();
modified.innerHTML += formattedDate;


// obtaining the current year
let currentYear = new Date();

let year = currentYear.getFullYear();

document.querySelector(".currentYear").innerText = year;

const hamButton = document.querySelector(".menu");
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector(".mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const header = document.querySelector("header");
const section = document.querySelector(".parent");
const card = document.querySelector(".card");
const nav = document.querySelector(".navigation");
const ul = document.querySelector("ul");
const card1 = document.querySelector("#card1");


modeButton.addEventListener("click", () => {
	body.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
	header.classList.toggle('dark-mode');
	section.classList.toggle('dark-mode');
	nav.classList.toggle('dark-mode');
	ul.classList.toggle('dark-mode');
	card.classList.toggle('dark-mode');
	card1.classList.toggle('dark-mode');


	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});


