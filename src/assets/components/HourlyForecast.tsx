import React from 'react'
import "./HourlyForecast.css";
import Rain from "./icons/weather_icons/rainy-1.svg";
import Day from "./icons/weather_icons/day.svg";
import Cloud from "./icons/weather_icons/cloudy-day-1.svg";
import HeavyRain from "./icons/weather_icons/rainy-7.svg";
import { forecastType } from "./types";
  type Props = {
        data: forecastType 
      }
const HourlyForecast = ({data}:Props) => {
  
  return (
    <div>
        <div id="HourlyForecastTitle"> Hourly Forecast</div>
        <hr></hr>
        <div className="HourlyForecastContainer">
            
        <div>
            {/* */}
            <div>{new Date(data?.list[0].dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
            <img src={Rain}></img>
            <div>{Math.round(data?.list[0].main.temp)} °C</div>

        </div>

        <div>
            {/* */}
            <div>{new Date(data?.list[1].dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
            <img src={Rain}></img>
            <div>{Math.round(data?.list[1].main.temp)} °C</div>

        </div>
        <div>
            {/* */}
            <div>{new Date(data?.list[2].dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
            <img src={Rain}></img>
            <div>{Math.round(data?.list[2].main.temp)} °C</div>

        </div>
        <div>
            {/* */}
            <div>{new Date(data?.list[3].dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
            <img src={Rain}></img>
            <div>{Math.round(data?.list[3].main.temp)} °C</div>

        </div>
        <div>
            {/* */}
            <div>{new Date(data?.list[4].dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
            <img src={Rain}></img>
            <div>{Math.round(data?.list[4].main.temp)} °C</div>

        </div>
        
         </div>

        </div>
  )
}

export default HourlyForecast