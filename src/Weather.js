import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      city: response.data.city,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      feels: response.data.temperature.feels_like,
      icon: response.data.condition.icon_url,
    });
  }

  function search() {
    let apiKey = `862f3f222203dfdb41ea32o5dtb2e6ad`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function changeCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <form className="search-engine" onSubmit={handleSubmit}>
            <input
              type="search"
              className="col-6"
              placeholder="Search a City"
              autoFocus="on"
              onChange={changeCity}
            />{" "}
            <input type="submit" className="col-3" />
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
