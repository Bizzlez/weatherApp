import "./WeatherInfo.css";
import SunriseIcon from "./icons/sunrise";
import SunsetIcon from "./icons/sunset";
import ThermoHighIcon from "./icons/thermohigh";
import ThermoLowIcon from "./icons/thermolow";

const WeatherInfo = () => {
  return (
    <div id="weatherInfo">
      <SunriseIcon /> &nbsp;Sunrise: 8:00AM | <SunsetIcon /> &nbsp;Sunset: 7:00
      PM | <ThermoHighIcon />
      &nbsp; High: 28 °C | <ThermoLowIcon />
      &nbsp; Low: 24 °C
    </div>
  );
};

export default WeatherInfo;
