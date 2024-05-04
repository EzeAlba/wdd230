const modified = document.getElementById('lastModified');
let currentDate = new Date(document.lastModified);
let formattedDate = currentDate.toLocaleString();
modified.innerHTML += formattedDate;
