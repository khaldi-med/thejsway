"use strict";

while(true){
const option = ["1" , "2" , "3" , "0"];
const links = ["1. hello.com"];
const choosOp = prompt(`Choose in option:
  1 : Shoose links
  2 : Add a link
  3 : Remove a link
  0 : Quit`
);
if (choosOp === option[0]){
  alert(links)
}
else if(choosOp === option[1]){
  const linkTitle = prompt("Enter the title: ");
  const linkUrl = prompt("Enter the url: ");
  const author = prompt("Enter the author: ");
  
  if(!(linkUrl.startsWith("http://"|| "https://"))){
    let newLinkUrl = `https://${linkUrl}`};
    const newLink = `Title: ${linkTitle} | Url: ${newLinkUrl} | Author:`
  links.push(addLink);
  alert(links);
}
else if(choosOp === option[3]){
  break;
}
}

