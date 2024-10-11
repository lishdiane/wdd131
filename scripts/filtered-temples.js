//get current year and last modified 
const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = today.getFullYear();

let modified = document.querySelector("#lastModified");
modified.innerHTML = document.lastModified;

//hampurger menu toggle
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

//temple data
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Copenhagen Denmark",
        location: "Frederiksberg, Denmark",
        dedicated: "2004, May, 23",
        area: 25000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/copenhagen-denmark/800x500/copenhagen-denmark-temple-lds-278232-wallpaper.jpg"
    },
    {
        templeName: "Hamilton New Zealand",
        location: "Hamilton, Auckland, New Zealand",
        dedicated: "1958, April, 20",
        area: 45251,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hamilton-new-zealand/320x200/hamilton-new-zealand-lds-temple-942155-wallpaper.jpg" 
    },
    {
        templeName: "Kyiv Ukraine",
        location: "Kyevo-Sviatoshyns’ky Rayon, Kyiv, Ukraine",
        dedicated: "2010, August, 29",
        area: 22184,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/800x500/kyiv-ukraine-lds-temple-1129616-wallpaper.jpg"
    },
  ];

//creating temple cards
  createTempleCard(temples);

  function createTempleCard(temples) {
    //creates and places temple card
    const templeCards = temples.map(templeCardTemplate);
    document.querySelector(".temples").innerHTML = templeCards.join("");
  }
  
  function templeCardTemplate(temple) {
    //returns temple card template
    return`<div class="card">
        <h3>${temple.templeName}</h3>
        <table>
            <tr>
                <th>Location:</th>
                <td>${temple.location}</td>
            </tr>
            <tr>
                <th>Dedicated:</th>
                <td>${temple.dedicated}</td>
            </tr>
            <tr>
                <th>Size:</th>
                <td>${temple.area} sq ft</td>
            </tr>
        </table>
        <img loading="lazy" src="${temple.imageUrl}" width="268" height="168" alt="${temple.templeName} Temple">
    </div>`
  }

// event listeners to filter temples
const home = document.querySelector("#home");
const newLink = document.querySelector("#new");
const oldLink = document.querySelector("#old");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

home.addEventListener("click", () => {
    createTempleCard(temples);
    setActive(home);
});

newLink.addEventListener("click", () => {
    let newTemples = temples.filter((temple) => {
        let stringParts = temple.dedicated.split(",");
        let year = parseInt(stringParts[0]);
        if (year >= 2000) {
            return temple;
        }
    });
    createTempleCard(newTemples);
    setActive(newLink);
});

oldLink.addEventListener("click", () => {
    let oldTemples = temples.filter((temple) => {
        let stringParts = temple.dedicated.split(",");
        let year = parseInt(stringParts[0]);
        if (year <= 1900) {
            return temple;
        }
    });
    createTempleCard(oldTemples);
    setActive(oldLink);
});

largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter((temple) => temple.area > 90000));
    setActive(largeLink);
});

smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter((temple) => temple.area < 10000));
    setActive(smallLink);
});

function setActive(activeLink) {
    //sets active navigation
    const links = document.querySelectorAll(".navLink");
    links.forEach((link) => link.classList.remove("active"));
    activeLink.classList.toggle("active");
}

