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

const content = getComputedStyle(document.getElementById("content"));
const width = content.width
const height = content.height

const listWidth = document.getElementById("lists");
listWidth.insertAdjacentHTML("afterBegin", `<li>Height: ${height}px</li>`);
listWidth.insertAdjacentHTML("beforeend", `<li>Width: ${width}px</li>`);
