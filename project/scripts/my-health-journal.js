// get year and last modified date and time
const year = document.querySelector("#currentYear");
const today = new Date();

year.innerHTML = today.getFullYear();

let modified = document.querySelector("#lastModified");
modified.innerHTML = document.lastModified;

// add food to journal and calculate totals

const tableBody = document.querySelector("tbody");
const form = document.querySelector(".form");

let inputName = document.querySelector("#foodName");
let inputCalories = document.querySelector("#calories");
let inputCarbs = document.querySelector("#carbs");
let inputFat = document.querySelector("#fat");
let inputProtein = document.querySelector("#protein");

const totalCalories = document.querySelector("#total-calories");
const totalCarbs = document.querySelector("#total-carbs");
const totalFat = document.querySelector("#total-fat");
const totalProtein = document.querySelector("#total-protein");

const carbsMacro = document.querySelector("#carbs-macro");
const fatMacro = document.querySelector("#fat-macro");
const proteinMacro = document.querySelector("#protein-macro");

const foods = getJournal() || [];

if (foods.length != 0) {
    displayEntries();
}

form.addEventListener("submit", () => {
    createFoodObject();
    setJournal();
    displayEntries();
});


// Functions

function calculateTotal(type) {
    return foods.reduce((total, currentValue) => {
        return total + currentValue[type]
    }, 0);
}

function calculateMacroPercentage(type) {
    const carbs = calculateTotal("carbs") * 4;
    const fat = calculateTotal("fat") * 9;
    const protein = calculateTotal("protein") * 4;
    const totalMacroCalories = carbs + fat + protein;

    if (type === "carbs" ) {
        return `${Math.round(carbs / totalMacroCalories * 100)}%`;
    } else if (type === "protein") {
        return `${Math.round(protein / totalMacroCalories * 100)}%`;
    }else if (type === "fat") {
        return `${Math.round( fat / totalMacroCalories  * 100)}%`;
    }
}

function createFoodObject() {

    const food = {};

    let foodName = inputName.value;
    inputName.value = "";
    let calories = parseInt(inputCalories.value);
    inputCalories.value = "";
    let carbs = parseInt(inputCarbs.value);
    inputCarbs.value = "";
    let fat = parseInt(inputFat.value);
    inputFat.value = "";
    let protein = parseInt(inputProtein.value);
    inputProtein.value = "";

    foodName = capitalizeFirstLetter(foodName)

    food.foodName = foodName;
    food.calories = calories;
    food.carbs = carbs;
    food.fat = fat;
    food.protein = protein;

    foods.push(food);
}

function displayEntries() {
    const foodElements = foods.map(tableTemplate);
    tableBody.innerHTML = foodElements.join("");

    totalCalories.innerHTML = calculateTotal("calories");
    totalCarbs.innerHTML = calculateTotal("carbs");
    totalFat.innerHTML = calculateTotal("fat");
    totalProtein.innerHTML = calculateTotal("protein");

    carbsMacro.innerHTML = calculateMacroPercentage("carbs")
    fatMacro.innerHTML = calculateMacroPercentage("fat")
    proteinMacro.innerHTML = calculateMacroPercentage("protein")
}

function setJournal() {
    localStorage.setItem("journalEntries", JSON.stringify(foods));
}

function getJournal() {
    return JSON.parse(localStorage.getItem("journalEntries"));
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function tableTemplate(food) {
    return `<tr>
    <td>${food.foodName}</td>
    <td>${food.calories}</td>
    <td>${food.carbs}</td>
    <td>${food.fat}</td>
    <td>${food.protein}</td>
    </tr>`
}