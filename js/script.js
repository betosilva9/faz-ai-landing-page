const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});


const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });

});


const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


const ctaButton = document.getElementById("ctaButton");

ctaButton.addEventListener("click", (event) => {

    event.preventDefault();

    alert(
        "Obrigado pelo interesse no Faz Aí! Em breve teremos novidades."
    );

});