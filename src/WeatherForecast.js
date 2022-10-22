import axios, { Axios } from "axios";
import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  function handleForecast(response) {
    console.log(response.data);
  }

  let apiKey = "40fe6b5at4b35a738783f3e891e2281o";
  let city = "Edinburgh";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);

  axios.get(apiUrl).then(handleForecast);

  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day">Mon</div>
          <div className="weatherForeast-icon">icon</div>
          <div className="weatherForecast-temp">
            <span className="weatherForecast-temp-max">19°</span> /{" "}
            <span className="weatherForecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
