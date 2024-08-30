import "./WeatherInfo.css";
import SunriseIcon from "./icons/sunrise";
import SunsetIcon from "./icons/sunset";
import ThermoHighIcon from "./icons/thermohigh";
import ThermoLowIcon from "./icons/thermolow";
import { cityType, forecastType } from "./types";
type Props = {
  data: forecastType 
  cityTime: cityType
}


const WeatherInfo = ({data,cityTime}:Props) => {
  const localSunriseTime = new Date(
    (data?.sunrise + cityTime?.timezone) * 1000 +
      new Date().getTimezoneOffset() * 60 * 1000
  );
  const localSunsetTime = new Date(
    (data?.sunset + cityTime?.timezone) * 1000 +
      new Date().getTimezoneOffset() * 60 * 1000
  );
  return (
    <div id="weatherInfo">
      <SunriseIcon /> &nbsp;{`Sunrise: ${localSunriseTime.toLocaleString('en-US', {hour: '2-digit', minute:'2-digit'})}`} | <SunsetIcon /> &nbsp;{`Sunset: ${localSunsetTime.toLocaleString('en-US', {hour: '2-digit', minute:'2-digit'})}`}
      | <ThermoHighIcon />
      &nbsp; High: {Math.ceil(data?.list[0].main.temp_max)} °C | <ThermoLowIcon />
      &nbsp; Low: {Math.floor(data?.list[0].main.temp_min)} °C
    </div>
  );
};

export default WeatherInfo;
