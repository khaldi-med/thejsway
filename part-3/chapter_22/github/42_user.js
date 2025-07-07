"use strict";

  fetch("https://api.intra.42.fr/v2/3")
    .then((response) => response.json())
    .then((user) => {
        console.log(user);
    })
    .catch((err) => {
      console.error(err.message);
    });
