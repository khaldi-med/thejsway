/* Password checker */

"use strict";

//Check the length of the passwords

document.getElementById("password1").addEventListener("input", (e) => {
  const password1 = e.target.value;
  let passwordLength = "too short";
  let messageColor = "red";

  if (password1.length < 6) {
    passwordLength;
    messageColor;
  } else {
    passwordLength = "Good one!";
    messageColor = "green";
  }
  const passwordHelp = document.getElementById("passwordHelp");
  passwordHelp.textContent = passwordLength;
  passwordHelp.style.color = messageColor;
});
document.getElementById("password1").addEventListener("blur", (e) => {
  document.getElementById("passwordHelp").textContent = "";
});

// Check if the passwords have at least one digit

document.getElementById("password1").addEventListener("blur", (e) => {
  let digitMessage = "It must be at least one digit";
  let messageColor = "red";
  const passwordDigit = /\d/;
  if (!passwordDigit.test(e.target.value)) {
    digitMessage;
    messageColor;
  } else {
    digitMessage = "";
    messageColor = "";
  }
  const passwordHelp = document.getElementById("passwordHelp");
  passwordHelp.textContent = digitMessage;
  passwordHelp.style.color = messageColor;
});

// Check if the passwords match

document.getElementById("password1").addEventListener("input", (e) => {
  const password1 = e.target.value;
  document.getElementById("password2").addEventListener("input", (e) => {
    const password2 = e.target.value;
    let message = "Passwords don't match";
    let messageColor = "red";
    if (password1 !== password2) {
      message;
      messageColor;
    } else {
      message = "Passwords match";
      messageColor = "green";
    }
    const passwordHelp = document.getElementById("passwordHelp");
    passwordHelp.textContent = message;
    passwordHelp.style.color = messageColor;
  });
});
