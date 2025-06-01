function displayWeather(city, temperature, humidity, condition) {
  try {
 
    if (!city || temperature === undefined || humidity === undefined || !condition) {
      throw new Error("Invalid or missing weather data.");
    }

    document.getElementById("city-name").textContent = `City: ${city}`;
    document.getElementById("temperature").textContent = `Temperature: ${temperature}°C`;
    document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
    document.getElementById("condition").textContent = `Condition: ${condition}`;
  } catch (error) {
    alert("Error: " + error.message);
  }
}


function simulateWeather() {

  const weatherData = {
    city: "Cairo",
    temperature: Math.floor(Math.random() * 35) + 10, 
    humidity: Math.floor(Math.random() * 60) + 20,    
    condition: "Sunny"
  };

  displayWeather(weatherData.city, weatherData.temperature, weatherData.humidity, weatherData.condition);
}

simulateWeather();