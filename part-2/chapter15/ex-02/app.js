"use strict";

const newspapers = ["https://www.nytimes.com", "https://www.washingtonpost.com", "http://www.economist.com"];

const linkContent = newspapers.forEach(link =>
  document.getElementById("content").insertAdjacentHTML('beforeend', `<a href="${link}">${link}</a></br>`))
