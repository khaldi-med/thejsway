"use strict";

class link {
    constructor(title, url, author) {
        let urlFormat = url;
        if (!urlFormat.startsWith("http://") && !urlFormat.startsWith("https://")) {
            urlFormat = `http://${urlFormat}`;
        }
        this.title = title;
        this.url = urlFormat;
        this.author = author;
    }
    toString() {
        return `${this.title} ${this.url} ${this.author}`;
    }
    toHTML() {
        const linkElement = document.createElement("div");
        linkElement.setAttribute("class", "link");

        const titleElement = document.createElement("a");
        titleElement.setAttribute("class", "linkTitle");
        titleElement.textContent = this.title;
        titleElement.href = this.url;
        linkElement.appendChild(titleElement);

        const urlElement = document.createElement("span");
        urlElement.setAttribute("class", "linkUrl");
        urlElement.textContent = this.url;
        linkElement.appendChild(urlElement);

        const newLine = document.createElement("br");
        linkElement.appendChild(newLine);

        const authorElement = document.createElement("span");
        authorElement.setAttribute("class", "linkAuthor");
        authorElement.textContent = "submitter: " + this.author;
        linkElement.appendChild(authorElement);
        return linkElement;
    }
}

const form = document.getElementById("content");

const addNewLink = document.getElementById("submitButton");

let areaInput = () => {
    addNewLink.disabled = true;
    const container = document.getElementsByClassName("container");

    const divElement = document.createElement("div");
    divElement.setAttribute("class", "linkForm");

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("placeholder", "Title");

    divElement.appendChild(titleInput);

    const urlInput = document.createElement("input");
    urlInput.setAttribute("type", "text");
    urlInput.setAttribute("id", "url");
    urlInput.setAttribute("name", "url");
    urlInput.setAttribute("placeholder", "Url");

    divElement.appendChild(urlInput);

    const authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("id", "author");
    authorInput.setAttribute("name", "author");
    authorInput.setAttribute("placeholder", "Author");

    divElement.appendChild(authorInput);

    const submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Submit");
    submitButton.setAttribute("id", "submit");

    divElement.appendChild(submitButton);
    submitButton.addEventListener("click", () => {
        const title = document.getElementById("title").value;
        const url = document.getElementById("url").value;
        const author = document.getElementById("author").value;
        const newLink = new link(title, url, author);
        form.appendChild(newLink.toHTML());
        addNewLink.disabled = false;
    });

    container[container.length - 1].appendChild(divElement);
};

addNewLink.addEventListener("click", areaInput);

let heroUrl = new link("Hacker", "hero.com", "HeroMan");
form.appendChild(heroUrl.toHTML());

let bookUrl = new link("Book", "book.com", "BookMan");
form.appendChild(bookUrl.toHTML());
