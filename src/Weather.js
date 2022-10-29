import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      feels: response.data.temperature.feels_like,
      icon: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <form className="search-engine">
            <input
              type="search"
              className="col-6"
              placeholder="Search a City"
              autoFocus="on"
            />{" "}
            <input type="submit" className="col-3" />
          </form>
        </div>
        <div className="row">
          {" "}
          <div className="col-6">
            <h1 className="currecnt-city">{weatherData.city}</h1>
            <div>
              <small>Last updated: Today 10:57am</small>
            </div>
            <div className="clearfix">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="float-left"
              />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°F</span>
            </div>
          </div>
          <div className="col-6">
            <ul className="current-conditions">
              <li>Feels like: {Math.round(weatherData.feels)}°F</li>
              <li className="text-capitalize">{weatherData.description}</li>
              <li>Wind: {Math.round(weatherData.wind)} mph </li>
              <li>Hummidity: {Math.round(weatherData.humidity)}%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "862f3f222203dfdb41ea32o5dtb2e6ad";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showResponse);
    return "loading...";
  }
}
