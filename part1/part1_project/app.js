"use strict";

const option = ["1", "2", "3", "0"];
let links = [];

while (true) {
  const choosOp = prompt(`Choose in option:
  1 : Shoose links
  2 : Add a link
  3 : Remove a link
  0 : Quit`
  );
  if (choosOp === option[0]) {
    links.forEach((link, i) => {
      alert(`${i + 1}: ${link}`);
    });

  }
  else if (choosOp === option[1]) {
    const linkTitle = prompt("Enter the title: ");
    const linkUrl = prompt("Enter the url: ");
    const author = prompt("Enter the author: ");

    let newLink = `${linkTitle} ${linkUrl}. Author: ${author}`;

    const httpProtocol = ["http://", "https://"]
    if (!(linkUrl.startsWith(httpProtocol[0]) || linkUrl.startsWith(httpProtocol[1]))) {
      const newLinkUrl = `https://${linkUrl}`;
      newLink = `${linkTitle} ${newLinkUrl}. Author: ${author}`;
      links.push(newLink);
    }
    else {
      links.push(newLink);
    }
  }
  else if (choosOp === option[3]) {
    break;
  }
}
