"use strict";

const linkInfo = (link) => {
    let allLinks = Array.from(document.querySelectorAll(link));

    console.log(allLinks.length);
    console.log(allLinks[0].href);
    console.log((allLinks[(allLinks.length - 1)].href));
};

linkInfo("a");
