"use strict";

const desserts = document
  .getElementById("addButton")
  .addEventListener("click", (e) => {
    const userInput = prompt("What is your favourite dessert?");
    const newElement = document.createElement("li");
    newElement.id = "fruit";
    newElement.textContent = userInput;
    document.getElementById("desserts").appendChild(newElement);
  });

const changeFruitName = document.getElementById("desserts").addEventListener("click", e => {
  const newFruit = prompt("What is your new favourite dessert?");

  e.target.textContent = newFruit;
})
