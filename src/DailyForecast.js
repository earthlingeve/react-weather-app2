//import { cleanup } from "@testing-library/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./DailyForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  //let icon = props.icon;
  //let description = props.description;
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  if (loaded) {
    console.log(forecast[0]);
    return (
      <div className="DailyForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let city = props.city;
    let apiKey = "862f3f222203dfdb41ea32o5dtb2e6ad";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    //console.log(props);
    return null;
  }
}
