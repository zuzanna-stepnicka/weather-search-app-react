import React, { useState } from "react";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  let [units, setUnits] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
      setUnits("fahrenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnits("celcius");
    }
    function fahrenheit() {
        return (props.temperature * 9) / 5 + 32;
    }
  if (units === "celcius") {
    return (
      <div>
        <span className="temp">
          {Math.round(props.temperature)}{" "}
          <span className="units">
            °C |{" "}
            <a href="./" onClick={showFahrenheit}>
              °F{" "}
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temp">
          {Math.round(fahrenheit())}{" "}
          <span className="units">
            {" "}
            <a href="./" onClick={showCelcius}>
              °C{" "}
            </a>{" "}
            |°F{" "}
          </span>
        </span>
      </div>
    );
  }
}
