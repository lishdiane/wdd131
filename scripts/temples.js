const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = today.getFullYear();

let modified = document.querySelector("#lastModified");
modified.innerHTML = document.lastModified;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector("#menu");

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle("show");
});