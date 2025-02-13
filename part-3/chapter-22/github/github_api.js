"use strict";

const formElement = document.querySelector("form");
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const login = formElement.elements.login.value;
  fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then((user) => {
      //Image
      const picture = document.createElement("img");
      picture.src = user.avatar_url;
      picture.alt = user.name;
      picture.style.width = "150px";
      picture.style.height = "150px";
      //Name
      const elementInfos = document.createElement("h3");
      elementInfos.textContent = user.name;
      //Append
      const infos = document.getElementById("infos");
      infos.innerHTML = "";
      infos.appendChild(picture);
      infos.appendChild(elementInfos);
    })
    .catch((err) => {
      console.error(err.message);
    });
});
