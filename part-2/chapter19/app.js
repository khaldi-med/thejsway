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
}

const button = document.getElementById("submitButton");
const form = document.getElementById("content");

let test = new link("Hero", "hero.com", "hero Man");
button.addEventListener("click", () => {});
