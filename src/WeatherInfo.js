import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div>
        <h1>{props.data.city}</h1>
        <h2>{props.data.temperature}℃</h2>
        <ul>
          <li className="text-capitalize">{props.data.description}</li>
          <li>{Math.round(props.data.feelsLike)}℃</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
