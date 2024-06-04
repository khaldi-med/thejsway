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

const subscriptionElements = Array.from(document.getElementsByName("subscription"));
subscriptionElements.forEach(element => {
  element.addEventListener("change", e => {
    console.log(`Selected subscription: ${e.target.value}`);
  });
});

document.getElementById("nationality").addEventListener("change", e => {
  console.log("Nationality code: " + e.target.value);
});
