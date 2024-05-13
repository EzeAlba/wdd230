const modified = document.getElementById('lastModified');
let currentDate = new Date(document.lastModified);
let formattedDate = currentDate.toLocaleString();
modified.innerHTML += formattedDate;


// obtaining the current year
let currentYear = new Date();

let year = currentYear.getFullYear();

document.getElementById("currentYear").innerText = year;

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

const visitsDisplay = document.querySelector("#visit-count");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

document.addEventListener("DOMContentLoaded", function () {
	let messageElement = document.getElementById("message");

	// Get the current date
	let currentDate = new Date();
	let currentTimestamp = currentDate.getTime();

	// Get the last visit date from localStorage
	let lastVisitTimestamp = localStorage.getItem("lastVisitTimestamp");

	if (!lastVisitTimestamp) {
		// First visit
		messageElement.textContent = "Welcome! Let us know if you have any questions.";
	} else {
		// Calculate the time difference in milliseconds
		let timeDifference = currentTimestamp - lastVisitTimestamp;
		let oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 1 day in milliseconds

		if (timeDifference < oneDayInMilliseconds) {
			// Less than a day since the last visit
			messageElement.textContent = "Back so soon! Awesome!";
		} else {
			// Calculate the number of days between visits
			let daysDifference = Math.floor(timeDifference / oneDayInMilliseconds);
			let dayString = daysDifference === 1 ? "day" : "days";

			// Display the appropriate message
			messageElement.textContent = "You last visited " + daysDifference + " " + dayString + " ago.";
		}
	}

	// Store the current visit timestamp in localStorage
	localStorage.setItem("lastVisitTimestamp", currentTimestamp);
});
