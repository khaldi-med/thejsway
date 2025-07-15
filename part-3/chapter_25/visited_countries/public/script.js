"use strict";

// Handle form submission
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  // Get form data
  const formData = new FormData(e.target);
  // Convert FormData to regular object
  const data = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value;
    console.log(`Key: ${key}, Value: ${value}`); // Log each key-value pair
  }
  // Send data to server
  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      document.getElementById("result").textContent = result.message;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
