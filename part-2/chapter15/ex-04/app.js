"use strict";

const textColor = prompt("Enter the color for text: ")
const backColor = prompt("Enter the background color for pragraph: ")

const textStyle = document.querySelectorAll("h1 + div");
textStyle.forEach(div => {
    div.style.color = textColor;
    div.style.backgroundColor = backColor;
})
