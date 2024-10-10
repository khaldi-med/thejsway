'use strictr';

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Bordeaux,fr&appid=99c8735d7b6b79a6b0d9487f3d42c6d8&units"
)
  .then((response) => response.json())
  .then((weatherData) => {
    // Extract some weather properties from API call result
    const location = weatherData.name;
    const temperature = weatherData.main.temp;
    const humidity = weatherData.main.humidity;

    // Create DOM elements for these properties
    const summaryElement = document.createElement("div");
    summaryElement.textContent = `Temperature is ${temperature} °C with ${humidity}% humidity.`;
    // Add location to title
    document.querySelector("h2").textContent += ` ${location}`;
    // Add elements to the page
    const weatherElement = document.getElementById("weather");
    weatherElement.appendChild(summaryElement);
  })
  .catch((err) => {
    console.error(err.message);
  });
