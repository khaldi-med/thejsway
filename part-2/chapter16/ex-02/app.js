"use strict";

const changeBackColor = (event) => {
    let key = "unknown";
    switch (event.key) {
          case "Y":
              key = "yellow";
              break;
            case "R":
              key = "red";
              break;
            case "G":
              key = "green";
              break;
            case "B":
              key = "blue";
              break;
          }
    return key;
};

document.addEventListener("keyup", (event) => {
    const color = changeBackColor(event);

    const textStyle = document.querySelectorAll("h1 + div");
    textStyle.forEach((div) => {
          div.style.backgroundColor = color;
        });
});

