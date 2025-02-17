import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col">
          <h1>
            {Math.round(props.data.temperature)}
            <span>℃</span>
          </h1>

          <div>{props.data.description}</div>
        </div>
        <div className="col">{props.data.icon}</div>
      </div>

      <div className="row">
        <div className="col">
          <h1>{props.data.city}</h1>
          <div>sunday, 00:24</div>
        </div>
        <div className="col">
          <div>Humidity: {props.data.humidity}%</div>
          <div>Wind: {props.data.wind} km/h</div>
          <div>feels like: {props.data.feel}</div>
        </div>
      </div>
    </div>
  );
}
