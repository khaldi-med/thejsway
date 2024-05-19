"use strict";

const has = (id, someClass) => {
  let element = document.getElementById(id);
  if (!element) {
    console.log(`No element has id ${id}`);
  } else if (element.classList.contains(someClass)) {
    console.log(true);
  } else {
    console.log(false);
  }
};

has("saxophone", "woodwind");
has("saxophone", "brass");
has("trumpet", "brass");
has("contrabass", "chordophone");
