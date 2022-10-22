import React from "react";

export default function WeatherForecastDay(props) {
  
  function maxTemp() {
    let temperature = Math.round(props.forecast.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.forecast.temperature.minimum);
    return `${temperature}°`;
    }
    function day() {
        let date = new Date(props.forecast.time*1000);
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        let day = date.getDay();    
        return days[day];
    }
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day">{day()}</div>

          <div className="weatherForeast-icon">
            <img src={props.forecast.condition.icon_url} alt="" />
          </div>

          <div className="weatherForecast-temp">
            <span className="weatherForecast-temp-max">{maxTemp()}</span> /{" "}
            <span className="weatherForecast-temp-min">
              {minTemp()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}