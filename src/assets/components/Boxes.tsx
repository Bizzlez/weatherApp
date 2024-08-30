import "./Boxes.css";
import ThermoIcon from "./icons/thermostat";
import WaterIcon from "./icons/water";
import WindIcon from "./icons/wind";
import Day from "./icons/weather_icons/day.svg";
import Cloud from "./icons/weather_icons/cloudy-day-1.svg";
import Rain from "./icons/weather_icons/rainy-1.svg";
import HeavyRain from "./icons/weather_icons/rainy-7.svg";


import { forecastType } from "./types";
type Props = {
  data: forecastType 
}
const Boxes = ({data}:Props) => {
  

  return (
    <div id="boxes">
      <div id="leftbox">
        <div id="weatherIcons">
          <img src={Rain} />
        </div>
      </div>
      <div id="middlebox">
        <span>{Math.round(data?.list[0].main.temp)}°C</span>
        <br></br>
      </div>
      <div id="rightbox">
        <div id="weatherDetails">
          <ThermoIcon /> &nbsp; feels like: &nbsp; &nbsp;<br></br> {Math.round(data?.list[0].main.feels_like)}°C
          <WaterIcon /> &nbsp; Humidity: &nbsp;&nbsp;&nbsp;<br></br> {data?.list[0].main.humidity}%
          <WindIcon /> &nbsp; Wind: &nbsp;&nbsp;<br></br> {data?.list[0].wind.speed}km/h
        </div>
      </div>
    </div>
  );
};

export default Boxes;
