'use strict'

document.getElementById('content').insertAdjacentHTML("afterend", '<p id="paragraph">Here is a more complete of <span id="link-placeholder">list</span> languages</p>');

const listLink = document.createElement('a')
listLink.textContent = "list"
listLink.href = "https://en.wikipedia.org/wiki/List_of_programming_languages";
document.getElementById('link-placeholder').replaceWith(listLink);
