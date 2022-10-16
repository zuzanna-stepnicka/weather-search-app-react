import React, { useState } from "react";
import axios from "axios";

import FormatedDate from "./FormatedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function updateCity(response) {
    setCity(response.target.value);
  }
  function displayWeather(response) {
    setLoaded(true);
    console.log(new Date(response.data.dt * 1000));
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }
  function findWeather(event) {
    event.preventDefault();
    let Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f969f80557f0fc40ffddd519ebd7d7f4&units=metric`;
    axios.get(Url).then(displayWeather);
  }
  let form = (
    <form onSubmit={findWeather}>
      <input type="form" placeholder="Type city .." onChange={updateCity} />
      <input type="submit" />
    </form>
  );
  let linkToGit = (
    <div className="linkToGit">
      <a
        href="https://github.com/zuzanna-stepnicka/weather-search-app-react"
        target="_blank"
        rel="noreferrer"
      >
        Open-source code
      </a>
      <span>, by Zuzanna Stepnicka</span>
    </div>
  );

  if (loaded) {
    return (
      <div>
        <div className="weather">
          {form}
          <div className="cityName">{weather.name}</div>
          <div className="row data1">
            <div className="col-6">
              <ul>
                <li>
                  <FormatedDate date={weather.date} />
                </li>
                <li>{weather.description}</li>
              </ul>
            </div>
          </div>
          <div className="row data1">
            <div className="col-3">
              <img src={weather.icon} alt="" />
            </div>
            <div className="col-3 temp">
              <WeatherTemperature temperature={weather.temperature}/>
            </div>
            <div className="col-6 conditions">
              <ul>
                <li>Wind speed: {weather.wind} m/s</li>
                <li>Humidity: {weather.humidity} %</li>
                <li>Pressure: {weather.pressure} hPa</li>
              </ul>
            </div>
          </div>
        </div>
        {linkToGit}
      </div>
    );
  } else {
    return (
      <div>
        <div className="weather">{form}</div>
        {linkToGit}
      </div>
    );
  }
}
