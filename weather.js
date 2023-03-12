// Don't forget to edit the code below according to your needs. Celsius degree ( °C ) is used, chck line 27.

// Fetch the weather data from the API
function getWeatherData(location) {
  const API_KEY = "YOUR_API_KEY";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon
      };
      displayWeatherData(weatherData);
    })
    .catch(error => console.log(error));
}

// Display the weather data on the webpage
function displayWeatherData(weatherData) {
  const temperature = document.querySelector("#temperature");
  const description = document.querySelector("#description");
  const icon = document.querySelector("#icon");

  temperature.textContent = `${weatherData.temperature} °C`;
  description.textContent = weatherData.description;
  icon.setAttribute("src", `https://openweathermap.org/img/w/${weatherData.icon}.png`);
}

// Get the user's location and fetch the weather data
navigator.geolocation.getCurrentPosition(position => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherData = {
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon
      };
      displayWeatherData(weatherData);
    })
    .catch(error => console.log(error));
});
