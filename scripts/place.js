// get year and last modified date and time
const year = document.querySelector("#currentYear");
const today = new Date();

year.innerHTML = today.getFullYear();

let modified = document.querySelector("#lastModified");
modified.innerHTML = document.lastModified;

// calculate wind chill
const calculateWindChill = (temp, wind) => 35.74 + 0.6215 * temp - 35.75 * (wind ** 0.16) + 0.4275 * temp * (wind ** 0.16);

const temp = document.querySelector("#temp");
const windSpeed = document.querySelector("#windSpeed");
const windChill = document.querySelector("#windChill");

const tempString = temp.textContent
const windSpeedString = windSpeed.textContent

const tempNum = parseInt(tempString.replace(" ℉", ""));
const windSpeedNum = parseInt(windSpeedString.replace(" mph", ""));

if (tempNum <= 50 && windSpeedNum > 3) {
    windChill.innerHTML = Math.round(calculateWindChill(tempNum, windSpeedNum));
} else {
    windChill.innerHTML = "N/A";
}


