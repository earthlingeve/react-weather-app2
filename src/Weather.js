import React from "react";
import axios from "axios";

export default function Weather() {
  function showResponse(response) {
    console.log(response.data);
  }

  const apiKey = "862f3f222203dfdb41ea32o5dtb2e6ad";
  let query = "Cancun";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(showResponse);

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
          <h1 className="currecnt-city">Cancun</h1>
          <div>
            <small>Last updated: Today 10:57am</small>
          </div>
          <div className="clearfix">
            <img
              src="https://openweathermap.org/img/wn/02d@2x.png"
              alt="few clouds"
              className="float-left"
            />
            <span className="temperature">87</span>
            <span className="unit">°F</span>
          </div>
        </div>
        <div className="col-6">
          <ul className="current-conditions">
            <li>H:90°|L:68°F</li>
            <li>few clouds</li>
            <li>Wind: 5 mph </li>
            <li>Hummidity: 78%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
