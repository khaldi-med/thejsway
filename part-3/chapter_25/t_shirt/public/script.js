"use strict";

// Function to create and show popup notification
/* function showPopupNotification(message, type = 'success') {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.popup-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `popup-notification ${type}`;

    // Set icon based on type
    const icon = type === 'success' ? '✅' : '❌';

    // Create notification content
    notification.innerHTML = `
        <span class="icon">${icon}</span>
        <span class="message">${message}</span>
        <button class="close-btn" onclick="this.parentElement.remove()">×</button>
        <div class="progress-bar"></div>
    `;

    // Add to body
    document.body.appendChild(notification);

    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Auto-dismiss after 2 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 2000);
}
 */
// Handle form submission
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  // Get form data
  const formData = new FormData(e.target);
  // Convert FormData to regular object
  const data = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value;
    //console.log(`Key: ${key}, Value: ${value}`); // Log each key-value pair
  }
  // Send data to server
  fetch("/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      document.getElementById("result").textContent = result.message;
      console.log("Success:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("result").textContent = "Error submitting form";
    });
});
