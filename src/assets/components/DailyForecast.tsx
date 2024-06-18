import React from "react";
import "./DailyForecast.css";
import Day from "./icons/weather_icons/day.svg";
import Cloud from "./icons/weather_icons/cloudy-day-1.svg";
import Rain from "./icons/weather_icons/rainy-1.svg";
import HeavyRain from "./icons/weather_icons/rainy-7.svg";
const DailyForecast = () => {
  return (
    <div className="dailyforecast-container">
      <div className="forecast-details">
        <div>
          <p> Monday</p>
          <img src={Rain}></img>
          <p>22C</p>
        </div>
      </div>
      <div className="forecast-details">
        <div>
          <p> Tue</p>
          <img src={Rain}></img>
          <p>22C</p>
        </div>
      </div>
      <div className="forecast-details">
        <div>
          <p> Wed</p>
          <img src={Rain}></img>
          <p>22C</p>
        </div>
      </div>
      <div className="forecast-details">
        <div>
          <p> Thu</p>
          <img src={Rain}></img>
          <p>22C</p>
        </div>
      </div>
      <div className="forecast-details">
        <div>
          <p> Fri</p>
          <img src={Rain}></img>
          <p>22C</p>
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
