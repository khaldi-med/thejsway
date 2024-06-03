"use strict";

const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished",
  },
  {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable",
  },
  {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory",
  },
];

const dictionaryList = document.createElement("dl");
dictionaryList.id = "dictionary";
document.getElementById("content").appendChild(dictionaryList);

const dictionary = words.forEach((word) =>
  document.getElementById("dictionary")
  .insertAdjacentHTML("beforeend",
    ` <dt><strong>${word.term}</strong></dt>
                <dd> ${word.definition}</dd>
                    `)
);
