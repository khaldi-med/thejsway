"use strict";

const usernameElement = document.getElementById("username");
usernameElement.value = "MyCoolUsername";

usernameElement.addEventListener("focus", (e) => {
  document.getElementById("usernameHelp").textContent =
    "Enter a unique username!";
});
usernameElement.addEventListener("blur", (e) => {
  document.getElementById("usernameHelp").textContent = "";
});
