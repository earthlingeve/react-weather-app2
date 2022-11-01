import React, { useState } from "react";
//import WeatherInfo from "./WeatherInfo.js";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <span className="WeatherTemp">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          <a href="null">°F</a>|
          <a href="null" onClick={showCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <span className="WeatherTemp">
        <span className="temperature">{Math.round(celsius)}</span>
        <span className="unit">
          <a href="null" onClick={showFahrenheit}>
            °F
          </a>
          |<a href="null">°C</a>
        </span>
      </span>
    );
  }
}
