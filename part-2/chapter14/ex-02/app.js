"use strict";

const linkInfo = (link) => {
      let allLinks = Array.from(document.querySelectorAll(link));
      if (!allLinks.length) {
              console.log("No links found");
            } else {
                    console.log(allLinks.length);
                    console.log(allLinks[0].href);
                    console.log(allLinks[allLinks.length - 1].href);
                  }
};

linkInfo("a");
