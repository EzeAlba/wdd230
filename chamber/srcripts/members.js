const linksURL = "https://ezealba.github.io/wdd230/chamber/data/members.json"
const cards = document.querySelector('#cards');

async function getMembers(){
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        const data = await response.json();
        displayEnterprises(data.empresas)
    } catch (error) {
        console.error('Error:', error);
    }
} 

getMembers();

function displayEnterprises(empresas) {
    empresas.forEach((empresa) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
         card.classList.add('card'); 
        let fullName = document.createElement('p'); 
        let portrait = document.createElement('img');
        let direccion = document.createElement('address');
        let web = document.createElement('a');
        let phone = document.createElement('tel');
        let membership = document.createElement('span');

        
        fullName.textContent = `${empresa.nombre}`; // fill in the blank
        direccion.textContent =`${empresa.direccion}`
        direccion.classList.add('direccion'); // Agregar clase para estilos específicos de dirección
        web.textContent =`${empresa.web}`
        web.setAttribute('href', empresa.web);
        web.classList.add('web');// Agregar clase para estilos específicos 
        phone.textContent =`${empresa.telefono}`
        phone.classList.add('phone');// Agregar clase para estilos específicos 
        membership.textContent =`${empresa.membresia}`
        membership.classList.add('membership');// Agregar clase para estilos específicos 
        

        


        
        portrait.setAttribute('src', empresa.imagen);
        portrait.setAttribute('alt', `Portrait of ${empresa.nombre}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '100%');
        portrait.setAttribute('height', '100%');

        
        card.appendChild(fullName); 
        card.appendChild(portrait);
        card.appendChild(direccion);
        card.appendChild(web);
        card.appendChild(phone);
        card.appendChild(membership);
        cards.appendChild(card);
    }); 
}
// change view
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("article");

gridButton.addEventListener("click", () => {
    // Agregar la clase 'grid' para la vista de cuadrícula y quitar la clase 'list'
    display.classList.add("grid");
    display.classList.remove("list");
});

listButton.addEventListener("click", () => {
    // Agregar la clase 'list' para la vista de lista y quitar la clase 'grid'
    display.classList.add("list");
    display.classList.remove("grid");
});