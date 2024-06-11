"use strict";

const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan",
];

const input = document.querySelector("input");
const suggestions = document.getElementById("suggestions");

input.addEventListener("input", (e) => {
    const userInput = e.target.value;
    suggestions.innerHTML = "";

    countryList.forEach((country) => {
        if (country.startsWith(userInput)) {
            const element = document.createElement("div");
            element.classList.add("suggestion");
            element.textContent = country;
            suggestions.appendChild(element);
        }
    });
});
suggestions.addEventListener("click", (e) => {
    input.value = e.target.textContent;
    suggestions.innerHTML = "";
});
