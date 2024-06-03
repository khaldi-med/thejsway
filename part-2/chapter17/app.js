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

document.getElementById("confirmation").addEventListener("change", e => {
  console.log(`Email confirmation request: ${e.target.checked}`);
});
