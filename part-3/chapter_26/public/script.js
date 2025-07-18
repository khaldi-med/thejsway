/* "use strict";

import { Message } from './app.js';

fetch('/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: bookUrl.title,
    url: bookUrl.url,
    author: bookUrl.author
  })
})
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log('Success:', data);
  const successMessage = new Message("Link added successfully!", data);
  form.insertBefore(successMessage.toHTML(), form.firstChild);
})
.catch((error) => {
  console.error('There was a problem with the fetch operation:', error);
}); */