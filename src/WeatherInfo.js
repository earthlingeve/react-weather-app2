import React from "react";
//import axios from "axios";
import TimeStamp from "./TimeStamp.js";
import WeatherTemp from "./WeatherTemp.js";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-6">
        <h1 className="currecnt-city">{props.data.city}</h1>
        <div>
          <small>
            Last updated: <TimeStamp date={props.data.date} />
          </small>
        </div>
        <div className="clearfix">
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="float-left"
          />
          <WeatherTemp fahrenheit={props.data.temperature} />
        </div>
      </div>
      <div className="col-6">
        <ul className="current-conditions">
          <li>Feels like: {Math.round(props.data.feels)}°F</li>
          <li className="text-capitalize">{props.data.description}</li>
          <li>Wind: {Math.round(props.data.wind)} mph </li>
          <li>Hummidity: {Math.round(props.data.humidity)}%</li>
        </ul>
      </div>
    </div>
  );
}
