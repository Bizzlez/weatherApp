import React from 'react'
import "./HourlyForecast.css";
import Rain from "./icons/weather_icons/rainy-1.svg";
import Day from "./icons/weather_icons/day.svg";
import Cloud from "./icons/weather_icons/cloudy-day-1.svg";
import HeavyRain from "./icons/weather_icons/rainy-7.svg";
const HourlyForecast = () => {
  return (
    <div>
        <div id="HourlyForecastTitle"> Hourly Forecast</div>
        <hr></hr>
        <div className="HourlyForecastContainer">
        <div>
            {/* */}
            <div>4:00 Pm</div>
            <img src={Rain}></img>
            <div>23 °C</div>

        </div>

        <div>
            {/* */}
            <div>4:00 Pm</div>
            <img src={Rain}></img>
            <div>23 °C</div>

        </div>
        <div>
            {/* */}
            <div>4:00 Pm</div>
            <img src={Rain}></img>
            <div>23 °C</div>

        </div>
        <div>
            {/* */}
            <div>4:00 Pm</div>
            <img src={Rain}></img>
            <div>23 °C</div>

        </div>
        <div>
            {/* */}
            <div>4:00 Pm</div>
            <img src={Rain}></img>
            <div>23 °C</div>

        </div>

        </div>

    </div>
  )
}

export default HourlyForecast