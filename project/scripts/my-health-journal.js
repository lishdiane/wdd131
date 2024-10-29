// get year and last modified date and time
const year = document.querySelector("#currentYear");
const today = new Date();

year.innerHTML = today.getFullYear();

let modified = document.querySelector("#lastModified");
modified.innerHTML = document.lastModified;
