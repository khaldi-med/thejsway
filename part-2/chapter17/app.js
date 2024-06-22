"use strict";

document.getElementById("password").addEventListener("input", e => {
  const password = e.target.value; // Value of the password field
  let passwordLength = "too short";
  let messageColor = "red"; // Short password => red
  if (password.length >= 8) {
    passwordLength = "adequate";
    messageColor = "green"; // Long password => green
  } else if (password.length >= 4) {
    passwordLength = "moderate";
    messageColor = "orange"; // Moderate password => orange
  }
  const passwordHelpElement = document.getElementById("passwordHelp");
  passwordHelpElement.textContent = `Length: ${passwordLength}`; // helper text
  passwordHelpElement.style.color = messageColor; // helper text color
});


document.getElementById("emailAddress").addEventListener("blur", e => {
  const emailRegex = /.+@.+\..+/;
  let validityMessage = "";
  if (!emailRegex.test(e.target.value)) {
    validityMessage = "Invalid address";
  }
  document.getElementById("emailHelp").textContent = validityMessage;
});


/**
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

 **/
