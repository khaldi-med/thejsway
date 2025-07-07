'use strictr';

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=London,fr&appid=99c8735d7b6b79a6b0d9487f3d42c6d8&units"
)
  .then((response) => response.json())
  .then((weatherData) => {

    const location = weatherData.name;
    const temperature = weatherData.main.temp;
    const humidity = weatherData.main.humidity;

    const summaryElement = document.createElement("div");
    summaryElement.textContent = `Temperature is ${temperature} °C with ${humidity}% humidity.`;
    document.querySelector("h2").textContent += ` ${location}`;
    const weatherElement = document.getElementById("weather");
    weatherElement.appendChild(summaryElement);
  })
  .catch((err) => {
    console.error(err.message);
  });


