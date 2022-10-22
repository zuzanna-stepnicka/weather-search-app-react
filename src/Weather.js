import React, { useState } from "react";
import axios from "axios";

import FormatedDate from "./FormatedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
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
    
    setWeather({
      name: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      icon: response.data.condition.icon_url,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
    });
  }
  function findWeather(event) {
    event.preventDefault();
    let apiKey = "40fe6b5at4b35a738783f3e891e2281o";
    let Url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

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
              <WeatherTemperature temperature={weather.temperature} />
            </div>
            <div className="col-6 conditions">
              <ul>
                <li>Wind speed: {weather.wind} m/s</li>
                <li>Humidity: {weather.humidity} %</li>
                <li>Pressure: {weather.pressure} hPa</li>
              </ul>
            </div>
          </div>
          <WeatherForecast city={city} />
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
