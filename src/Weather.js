import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("London");
  const [error, setError] = useState(null);

  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
    });
    setError(null);
  }

  function handleError(error) {
    console.log("Error fethcing the weather data:", error);
  }

  useEffect(() => {
    const apiKey = "f9006f5eft0a33fd9693b7da488a8o99";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }, [city]);

  return (
    <div className="Weather">
      <h1>{weatherData.city}</h1>
      <h2>{weatherData.temperature}℃</h2>
    </div>
  );
}
