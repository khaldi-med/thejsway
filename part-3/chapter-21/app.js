"use strict";

let ilList = document.getElementById("languageList");

fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt",
)
  .then((response) => response.text())
  .then((text) => {
    const lines = text.split(';');
    lines.forEach((line) => {
      const newIlList = document.createElement("li");
      newIlList.textContent = line;
      ilList.appendChild(newIlList);
    });
  });
