const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const header = document.querySelector("header");
const section = document.querySelector(".parent");
const card = document.querySelector(".card");
const nav = document.querySelector(".navigation");
const ul = document.querySelector("ul");
const card1 = document.querySelector("#card1");
const visit = document.querySelector("#visit-counter");


modeButton.addEventListener("click", () => {
	body.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    section.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode');
	ul.classList.toggle('dark-mode');
	card.classList.toggle('dark-mode');
	card1.classList.toggle('dark-mode');
	visit.classList.toggle('dark-mode');


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

const visitsDisplay = document.querySelector("#visit-count");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

