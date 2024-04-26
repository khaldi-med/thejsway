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
    alert(links);
  }
  else if (choosOp === option[1]) {
    const linkTitle = prompt("Enter the title: ");
    const linkUrl = prompt("Enter the url: ");
    const author = prompt("Enter the author: ");

    let newLink = { link: `${linkTitle} ${linkUrl}. Author: ${author}`, index: 0 };
    let newLinkIndex = `${newLink.index}: ${newLink.link}\n`;

    const httpProtocol = ["http://", "https://"]
    if (!(linkUrl.startsWith(httpProtocol[0]) || linkUrl.startsWith(httpProtocol[1]))) {
      const newLinkUrl = `https://${linkUrl}`;
      newLinkIndex = `${newLink.index}: ${linkTitle} ${newLinkUrl}. Author: ${author}\n`;
      links.push(newLinkIndex)
    }
    else {
      links.push(newLinkIndex)
    }
  }
  else if (choosOp === option[3]) {
    break;
  }
}


