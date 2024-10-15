// get year and last modified date and time
const year = document.querySelector("#currentYear");
const today = new Date();

year.innerHTML = today.getFullYear();

let modified = document.querySelector("#lastModified");
modified.innerHTML = document.lastModified;


const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

createOptions(products);

function createOptions(products) {
    const select = document.querySelector("#productselector");
    select.insertAdjacentHTML('beforeend', products.map(optionTemplate).join(""));
}

function optionTemplate(product) {
    return `<option value="${product.id}">${product.name}</option>`;
}


function countReviews() {
    let reviewsnum = JSON.parse(localStorage.getItem("reviewsnum")) || 0;
    reviewsnum += 1;
    JSON.stringify(localStorage.setItem("reviewsnum", reviewsnum));
    document.querySelector(".reviewsnum").innerHTML = `${reviewsnum}`;
}

