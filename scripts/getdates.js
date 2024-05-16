
const modified = document.getElementById('lastModified');
let currentDate = new Date(document.lastModified);
let formattedDate = currentDate.toLocaleString();
modified.innerHTML += formattedDate;


// obtaining the current year
let currentYear = new Date();

let year = currentYear.getFullYear();

document.getElementById("currentYear").innerText = year;