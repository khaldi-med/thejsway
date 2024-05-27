"use strict";

const incrementCount = () => {
  const count = document.getElementById("clickCount");
  count.textContent = parseInt(count.textContent) + 1;
};

const myBotton = document.getElementById("myButton");
myBotton.addEventListener("click", incrementCount);

const deactivateBotton = document.getElementById("deactivate");
deactivateBotton.addEventListener("click", () => {
  myBotton.removeEventListener("click", incrementCount)
})
