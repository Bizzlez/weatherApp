import "./Boxes.css";
import ThermoIcon from "./icons/thermostat";
import WaterIcon from "./icons/water";
import WindIcon from "./icons/wind";
import icons from "./icons/weatherIcons";


import { forecastType } from "./types";
type Props = {
  data: forecastType 
}
const Boxes = ({data}:Props) => {
  const todayWeatherIcon = data?.list[0].weather[0].icon

  return (
    <div id="boxes">
      <div id="leftbox">
        <div id="weatherIcons">
        {todayWeatherIcon && (
    <>
        {todayWeatherIcon === '01d' && <img src={icons.Sunny} />}
        {todayWeatherIcon === '01n' && <img src={icons.Night} />}
        {todayWeatherIcon === '02d' && <img src={icons.LightCloud} />}
        {todayWeatherIcon === '02n' && <img src={icons.NightCloud} />}
        {(todayWeatherIcon.includes('03') || todayWeatherIcon.includes('04')) && <img src={icons.Cloudy} />}
        {todayWeatherIcon.includes('09') && <img src={icons.HeavyRain} />}
        {todayWeatherIcon === '10d' && <img src={icons.Rain} />}
        {todayWeatherIcon === '10n' && <img src={icons.RainyNight} />}
        {todayWeatherIcon.includes('11') && <img src={icons.Thunder} />}
        {todayWeatherIcon.includes('13') && <img src={icons.Snowy} />}
    </>
)}
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
