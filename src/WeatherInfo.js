import React from "react";

export default function WeatherInfo(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.data.date.getDay()];
  let hours = props.data.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.data.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="WeatherInfo">
      <div>
        <h1>{props.data.city}</h1>
        <h2>{props.data.temperature}℃</h2>
        <div>
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="weather-icon"
          />
        </div>
        <h3>
          {day} {hours}:{minutes}
        </h3>
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
