function displayWeather(temp, humidity, condition) {
  try {
    if (temp == null || humidity == null || !condition) {
      throw new Error("Invalid weather data");
    }

    console.log(`Temperature: ${temp}°C`);
    console.log(`Humidity: ${humidity}%`);
    console.log(`Condition: ${condition}`);
  } catch (error) {
    console.error("Error: Unable to display weather data.", error.message);
  }
}

function simulateWeather() {
  const temp = 28;
  const humidity = 65;
  const condition = "Sunny";

  displayWeather(temp, humidity, condition);
}

simulateWeather();