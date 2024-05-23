"use strict";

const title = document.getElementById("infos");
title.insertAdjacentHTML(
    "afterBegin",
    '<h3 id="title">Information about the element</h3>',
);

const list = document
    .getElementById("infos")
    .insertAdjacentHTML(
        "afterend",
        '<ul id="lists"></ul>',
    );

const content = document.getElementById("content");
const width = content.offsetWidth;
const height = content.offsetHeight;

const listWidth = document.getElementById("lists");
listWidth.insertAdjacentHTML("afterBegin", `<li>Width: ${width}px</li>`);
listWidth.insertAdjacentHTML("beforeend", `<li>Height: ${height}px</li>`);
