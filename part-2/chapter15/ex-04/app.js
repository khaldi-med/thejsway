"use strict";


const textColor = prompt("Enter the color for text: ")
 const backColor = prompt("Enter the background color for pragraph: ")

const textStyle = document.body 
textStyle.style.color = textColor

const setBackgorund = Array.from(document.getElementsByClassName('text'));
setBackgorund.forEach((div) => {
    div.style.backgroundColor = backColor;
});

console.log(setBackgorund);
