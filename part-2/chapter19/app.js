"use strict";

class link {
  constructor(title, url, author) {
    let urlFormat = url;
    if (!urlFormat.startWith("http://") && !urlFormat.startWith("https://")) {
      urlFormat = `http://${urlFormat}`;
    }
    this.title = title;
    this.url = url;
    this.author = author;
  }
  toString() {
    return `${this.title} ${this.url} Author: ${this.author}`;
  }

  createLinkElement() {
    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", this.url);
    linkElement.textContent = this.title;
    return linkElement;
  }
}

const button = document.getElementById("submitButton");
const form = document.getElementById("content");

button.addEventListener("click", () => {
  const lable = document.createElement("lable");
  lable.setAttribute("class", "link");
  lable.setAttribute("for", "link");
  lable.textContent = "link";
  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", "text");
  inputElement.setAttribute("name", "title");
  form.appendChild(lable);
  form.appendChild(inputElement);
});
