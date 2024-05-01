"use strict";

const governmentForms = [
  {
    name: "Plutocracy",
    definition: "Rule by the wealthy"
  },
  {
    name: "Oligarchy",
    definition: "Rule by a small number of people"
  },
  {
    name: "Kleptocracy",
    definition: "Rule by the thieves"
  },
  {
    name: "Theocracy",
    definition: "Rule by a religious elite"
  },
  {
    name: "Democracy",
    definition: "Rule by the people"
  },
  {
    name: "Autocracy",
    definition: "Rule by a single person"
  }
];


const names = list => list.map(name => name.name);
console.log(names(governmentForms))

const lastIndex = lists => lists.filter(str => str.slice(-2) === "cy")

console.log(lastIndex(names(governmentForms)))
