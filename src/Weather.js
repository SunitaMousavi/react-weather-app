import React, { useState, useEffect } from "react";
import axios from "axios";
import "ldrs/ring"; // Importing the loading spinner from ldrs
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather() {
  // State to hold weather data
  const [weatherData, setWeatherData] = useState({ ready: false });
  // State for the currently searched city, default is London
  const [city, setCity] = useState("London");
  // State to hold user input for the city name
  const [inputCity, setInputCity] = useState("");
  // State to hold any error messages
  const [error, setError] = useState(null);

  /**
   * Handles the response from the weather API.
   * This function updates the weatherData state with the city and temperature.
   */
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true, // Set ready to true once data is fetched
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
    });
    setError(null); // Reset any previous errors
  }

  /**
   * Handles any error that occurs during the API request.
   * This function updates the error state and resets the weatherData.
   */
  function handleError(error) {
    console.log("Error fetching the weather data:", error); // Log the error to the console
    setError(
      "Sorry, we could not find the weather for the city you are looking for. Please try again."
    ); // Update the error state to notify the user
    setWeatherData({ ready: false }); // Prevent stale data from being displayed
  }

  /**
   * useEffect hook to fetch weather data whenever the city changes.
   * It constructs the API URL and sends a GET request using axios.
   * The loading state is set before the request is made.
   */
  useEffect(() => {
    const apiKey = "f9006f5eft0a33fd9693b7da488a8o99";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    setWeatherData({ ready: false }); // Set loading state before making the request
    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }, [city]); // Dependency array: runs effect whenever 'city' changes

  /**
   * Searches for the city based on user input.
   * If the input is not empty, it updates the city state and clears the input field.
   */
  function searchCity() {
    if (inputCity.trim() !== "") {
      // Check if input is not just space
      setCity(inputCity); // Update the city state to the input value
      setInputCity(""); // Clear the input field
    }
  }

  /**
   * Handles changes in the input field.
   * This function updates the inputCity state with the current value of the input.
   */
  function handleCityChange(event) {
    setInputCity(event.target.value); // Update inputCity state with the new input value
  }

  // Render the component
  return (
    <div className="Weather">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          searchCity();
        }}>
        <input
          type="search"
          placeholder="Enter a city..."
          autoFocus="on"
          value={inputCity} // Controlled input: sets the value of the input field
          onChange={handleCityChange} // Call handleCityChange on input change
        />
        <input type="submit" value="Search" />
      </form>
      {error && <div className="error">{error}</div>}{" "}
      {/* Display error message if it exists */}
      {weatherData.ready ? ( // Check if weather data is ready
        <WeatherInfo data={weatherData} />
      ) : (
        <div>
          <l-ring
            size="40"
            stroke="5"
            bg-opacity="0"
            speed="2"
            color="black"></l-ring>
        </div>
        // Display loading message while data is being fetched
      )}
    </div>
  );
}
