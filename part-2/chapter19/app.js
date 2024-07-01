"use strict";

const button = document.getElementById("submitButton");
const form = document.getElementById("content");

button.addEventListener("click", () => {
  const lable = document.createElement("lable");
  lable.setAttribute("class", "link");
  lable.setAttribute("for", "link");
  lable.textContent = "link";
  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", "text");
  inputElement.setAttribute("name", "title");
  form.appendChild(lable);
  form.appendChild(inputElement);
});
