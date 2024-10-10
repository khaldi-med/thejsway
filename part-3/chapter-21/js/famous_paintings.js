"use strict";

let tableCon = document.getElementById("paintings");

fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json",
)
  .then((response) => response.json())
  .then((texts) => {
    texts.forEach((text) => {
      let newTr = document.createElement("tr");
      newTr.innerHTML = `
        <td>${text.name}</td>
        <td>${text.year}</td>
        <td>${text.artist}</td>
      `;
      tableCon.appendChild(newTr);
    });
  })
