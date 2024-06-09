"use strict";

const houses = [{
    code: "ST",
    name: "Stark",
  },
  {
    code: "LA",
    name: "Lannister",
  },
  {
    code: "BA",
    name: "Baratheon",
  },
  {
    code: "TA",
    name: "Targaryen",
  },
];

const getCharacters = (houseCode) => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return [];
  }
};


const setHousesList = houses.forEach((house) => {
  const setChoice = document.createElement("option");
  const content = document.getElementById("house").appendChild(setChoice);
  content.value = house.code;
  content.textContent = house.name;
});

const selectList = document.querySelector("select");

selectList.addEventListener("change", (e) => {
  const selectedHouse = e.target.value;
  const character = getCharacters(selectedHouse);

  const list = document.getElementById("characters");
  list.innerHTML = "";
  character.forEach((character) => {
    const listItem = document.createElement("li");
    listItem.textContent = character;
    list.appendChild(listItem);
  });
});
