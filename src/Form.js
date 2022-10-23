import React, { useState } from "react";
import axios from "axios";

export default function Form(response) {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [humidity, setHumidity] = useState("");
  let [description, setDescription] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let [loaded, setLoaded] = useState(false);

  function showTemperature(response) {
    console.log(response);
    setLoaded(true);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setWind(response.data.wind.speed);
    setHumidity(response.data.main.humidity);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "9251248a80cd4432d5256905f9a0ea2f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Search a City" onChange={updateCity} />{" "}
      <input type="submit" />
    </form>
  );

  if (loaded)
    return (
      <div>
        {" "}
        {form}
        <ul>
          <li> Temperature:{Math.round(temperature)}</li>
          <li> Humidity:{Math.round(humidity)}</li>
          <li> Description:{description}</li>
          <li> Wind:{Math.round(wind)} </li>
          <li>
            {" "}
            <img src={icon} alt={description} />
          </li>
        </ul>
      </div>
    );
  else return form;
}
