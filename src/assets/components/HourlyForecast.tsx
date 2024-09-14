import "./HourlyForecast.css";
import icons from './icons/weatherIcons';
import { forecastType } from "./types";

type Props = {
  data: forecastType;
};

const HourlyForecast = ({ data }: Props) => {
  return (
    <div>
      <div id="HourlyForecastTitle">Hourly Forecast</div>
      <div className="forecast-separator" />
      <div className="HourlyForecastContainer">
        {data?.list.slice(0, 5).map((hourData) => (
          <div key={hourData.dt}>
            <div>{new Date(hourData.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            <div>
              {hourData.weather[0].icon && (
                <>
                  {hourData.weather[0].icon === '01d' && <img src={icons.Sunny} />}
                  {hourData.weather[0].icon === '01n' && <img src={icons.Night} />}
                  {hourData.weather[0].icon === '02d' && <img src={icons.LightCloud} />}
                  {hourData.weather[0].icon === '02n' && <img src={icons.NightCloud} />}
                  {(hourData.weather[0].icon.includes('03') || hourData.weather[0].icon.includes('04')) && <img src={icons.Cloudy} />}
                  {hourData.weather[0].icon.includes('09') && <img src={icons.HeavyRain} />}
                  {hourData.weather[0].icon === '10d' && <img src={icons.Rain} />}
                  {hourData.weather[0].icon === '10n' && <img src={icons.RainyNight} />}
                  {hourData.weather[0].icon.includes('11') && <img src={icons.Thunder} />}
                  {hourData.weather[0].icon.includes('13') && <img src={icons.Snowy} />}
                </>
              )}
            </div>
            <div>{Math.round(hourData.main.temp)} °C</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;