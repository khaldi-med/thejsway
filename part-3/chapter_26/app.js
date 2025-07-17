"use strict";

class Link {
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
    linkElement.style.border = "1px solid #ccc";
    linkElement.style.padding = "10px";
    linkElement.style.margin = "10px 0";
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
    authorElement.textContent = "submitted by " + this.author;
    linkElement.appendChild(authorElement);
    return linkElement;
  }
}

const form = document.getElementById("content");
const addNewLink = document.getElementById("submitButton");

let areaInput = () => {
  addNewLink.disabled = true;

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

    if (title && url && author) {
      const newLink = new Link(title, url, author);
      form.insertBefore(newLink.toHTML(), form.firstChild);
      // Clear the form inputs
      titleInput.value = "";
      urlInput.value = "";
      authorInput.value = "";


      // Display a success message

      const messageDiv = document.createElement("span");
      messageDiv.setAttribute("class", "message");
      messageDiv.textContent = "Link added successfully!";
      messageDiv.style.color = "black";
      messageDiv.style.fontWeight = "bold";
      messageDiv.style.background = "rgb(133, 230, 133)";
      messageDiv.style.position = "fixed";
      messageDiv.style.top = "10px";
      messageDiv.style.right = "10px";
      messageDiv.style.padding = "20px";
      messageDiv.style.border = "1px solid green";
      messageDiv.style.borderRadius = "5px";
      messageDiv.style.zIndex = "1000";

      document.body.appendChild(messageDiv);

      setTimeout(() => {
        document.body.removeChild(messageDiv);
      }, 1500);

      // Enable the "Add New Link" button again
      addNewLink.disabled = false;

      // Remove the input form after submission
      form.removeChild(divElement);
    } else {
      const ErrorMessage = document.createElement("span");
      ErrorMessage.textContent = "Please fill in all fields.";
      ErrorMessage.style.color = "black";
      ErrorMessage.style.fontWeight = "bold";
      ErrorMessage.style.background = "rgba(251, 47, 2, 1)";
      ErrorMessage.style.position = "fixed";
      ErrorMessage.style.top = "10px";
      ErrorMessage.style.right = "10px";
      ErrorMessage.style.padding = "20px";
      ErrorMessage.style.border = "1px solid green";
      ErrorMessage.style.borderRadius = "5px";
      ErrorMessage.style.zIndex = "1000";
      document.body.appendChild(ErrorMessage);
      setTimeout(() => {
        document.body.removeChild(ErrorMessage);
      }, 1500);
    }
  });

  // Insert the input form at the top (first position)
  form.insertBefore(divElement, form.firstChild);
  return divElement;
};

addNewLink.addEventListener("click", areaInput);

let heroUrl = new Link("Hacker", "hero.com", "HeroMan");
form.appendChild(heroUrl.toHTML());

let bookUrl = new Link("Book", "book.com", "BookMan");
form.appendChild(bookUrl.toHTML());
