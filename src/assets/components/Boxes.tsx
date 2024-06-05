import "./Boxes.css";
import ThermoIcon from "./icons/thermostat";
import WaterIcon from "./icons/water";
import WindIcon from "./icons/wind";
import Day from "./icons/weather_icons/day.svg"
import Cloud from "./icons/weather_icons/cloudy-day-1.svg"
import Rain from "./icons/weather_icons/rainy-1.svg"
import HeavyRain from "./icons/weather_icons/rainy-7.svg"

const Boxes = () => {
  return (
    <div id="boxes">
      <div id="leftbox">
        <div id="weatherIcons">
        <img src={Rain} />
        </div>
      </div>
      <div id="middlebox">
        
        <span>25 °C</span>
      </div>
      <div id="rightbox">
      
        <div id="weatherDetails">
          
          <ThermoIcon/> &nbsp; feels like: &nbsp; &nbsp;<br></br> 35°C
          <WaterIcon/> &nbsp; Humidity: &nbsp;&nbsp;&nbsp;<br></br> 32% 
          <WindIcon/> &nbsp; Wind: &nbsp;&nbsp;<br></br> 11km/h
          </div>
      </div>
    </div>
  );
};

export default Boxes;
