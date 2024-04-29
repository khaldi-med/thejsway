"use strict";

const option = ["1", "2", "3", "0"];
let links = [];

while (true) {
  const choosOp = prompt(`Choose in option:
  1 : Shoose links
  2 : Add a link
  3 : Remove a link
  0 : Quit`);
  if (choosOp === option[0]) {
    alert(links);
  } else if (choosOp === option[1]) {
    const linkTitle = prompt("Enter the title: ");
    const linkUrl = prompt("Enter the url: ");
    const author = prompt("Enter the author: ");

    let index = 1;
    let newLink = `${index}: ${linkTitle} ${linkUrl}. Author: ${author}\n`;

    const httpProtocol = ["http://", "https://"];
    if (
      !(
        linkUrl.startsWith(httpProtocol[0]) ||
        linkUrl.startsWith(httpProtocol[1])
      )
    ) {
      const newLinkUrl = `https://${linkUrl}`;
      const newLinkIndex = `${index}: ${linkTitle} ${newLinkUrl}. Author: ${author}\n`;
      links.push(newLinkIndex);
    } else {
      links.push(newLink);
    }
  } else if (choosOp === option[2]) {
    const removeLink = prompt(
      `Enter the index of the link to be removed (btween 1 and ${links.length})`,
    );

    if (removeLink > 0 && removeLink <= links.length) {
      links.splice(removeLink - 1, 1);
    } else {
      alert("There are no links to remove");
    }
  } else if (choosOp === option[3]) {
    break;
  }
}
