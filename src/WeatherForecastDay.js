import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temperature.maximum);
    return `${maxTemp}°`;
  }

  function minTemperature() {
    let minTemp = Math.round(props.data.temperature.minimum);
    return `${minTemp}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="DailyForecast-day">{day()}</div>
      <div className="DailyForecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.icon}
        />
      </div>
      <div className="DailyForecast-temperatures">
        <span className="temp-max">{maxTemperature()}</span>|
        <span className="temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
