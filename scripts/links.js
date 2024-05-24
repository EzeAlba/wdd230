const baseURL = "https://ezealba.github.io/wdd230/";
const linksURL = "https://ezealba.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data);
        displayLinks(data.weeks); // Access the "weeks" array
    } catch (error) {
        console.error('Error fetching links:', error);
    }
}

function displayLinks(weeks) {
    const linksList = document.getElementById('links-list');

    // Clear the list before adding new items
    linksList.innerHTML = '';

    // Iterate over the JSON and add the links to the HTML
    weeks.forEach((week) => {
        const weekItem = document.createElement('li');
        const weekTitle = document.createElement('strong');
        weekTitle.textContent = `${week.week}: `;
        weekItem.appendChild(weekTitle);

        //const linkList = document.createElement('ul');

        week.links.forEach((link) => {
            //const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent =`${link.title} | `;
            weekItem.appendChild(a);
            //linkList.appendChild(li);
        });

        //weekItem.appendChild(linkList);
        linksList.appendChild(weekItem);
    });
}

getLinks();
