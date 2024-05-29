"use strict";

const questions = [{
    statement: "2+2?",
    answer: "2+2 = 4",
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492",
  },
  {
    statement: "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter",
  },
];


const divElement = document.getElementById("content");

const textPage = questions.forEach((question) => {
  const pElement = document.createElement("p");
  divElement.appendChild(pElement);
  pElement.textContent = question.statement;

  const buttonElement = document.createElement("button");
  buttonElement.textContent = "Show answer";
  divElement.appendChild(buttonElement);

  buttonElement.addEventListener("click", () => {
    buttonElement.replaceWith(`${question.answer}`);
  });
});
