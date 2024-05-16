const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var confirmationWindow = window.open("", "Confirmation", "width=400,height=200");
    confirmationWindow.document.write("<p>¡Formulario enviado con éxito!</p>");
});


document.getElementById("myForm").addEventListener("submit", function(event) {
    
    modal.style.display = "block";
    this.reset();
});


var modal = document.getElementById("myModal");

if (modal) {
    var closeBtn = modal.querySelector(".close");
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault();
        modal.style.display = "block";
        this.reset();
    });

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none"; 
        }
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none"; 
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById("myForm");
    let passwordInput = document.getElementById("password-input");
    let repeatPasswordInput = document.getElementById("repeat-password-input");
    let passwordMatchError = document.getElementById("password-match-error");
    let submitBtn = document.querySelector(".submitBtn");

    submitBtn.addEventListener("click", function(event) {
        let password = passwordInput.value;
        let repeatPassword = repeatPasswordInput.value;

        if (password !== repeatPassword) {
            passwordMatchError.style.display = "block";
            event.preventDefault();
        } else {
            passwordMatchError.style.display = "none";
            
        }
    });
});
