function displayWeather(temp, humidity, condition) {
  try {
    if (temp == null || humidity == null || !condition) {
      throw new Error("Invalid weather data");
    }

    document.getElementById("weatherContainer").innerHTML = `
      <p>Temperature: ${temp}°C</p>
      <p>Humidity: ${humidity}%</p>
      <p>Condition: ${condition}</p>
    `;
  } catch (error) {
    console.error(error);
    document.getElementById("weatherContainer").innerHTML = `
      <p style="color: red;">Error: Unable to display weather data.</p>
    `;
  }
}

function simulateFetchWeather() {
  // Show loading status
  document.getElementById("weatherContainer").innerHTML = "<p>Loading weather data...</p>";

  // Simulate fetching data from an API with 2 seconds delay
  setTimeout(() => {
    // Simulated response from a fake API
    const simulatedResponse = {
      temperature: 27,
      humidity: 60,
      condition: "Sunny"
    };

    displayWeather(simulatedResponse.temperature, simulatedResponse.humidity, simulatedResponse.condition);
  }, 2000);
}