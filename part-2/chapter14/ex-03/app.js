"use strict";

const has = (id, someClass) => {
  if (document.getElementById(id).classList.contains(someClass)) {
    console.log(true);
  } else if (!document.getElementById(id)) {
    console.log(`No element has id ${id}`);
  } else {
    console.log(false);
  }
};

has("saxophone", "woodwind");
has("saxophone", "brass");
has("trumpet", "brass");
has("contrabass", "chordophone");
