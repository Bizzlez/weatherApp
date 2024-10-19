import "./DailyForecast.css";
import icons from "./icons/weatherIcons";
import humidGif from "./icons/humidity.gif";
import thermoGif from "./icons/thermometer.gif";
import windGif from "./icons/wind.gif";

import { forecastType } from "./types";

type Props = {
  data: forecastType  | null
}

const DailyForecast = ({data}:Props) => {


  // Default to an empty array if data is null
  const filteredData = (data?.list || []).filter((forecast) => {
    const dtTxtDate = new Date(forecast.dt_txt);

    // Check if the hours, minutes, and seconds are all 0
    return dtTxtDate.getHours() === 0 && dtTxtDate.getMinutes() === 0 && dtTxtDate.getSeconds() === 0;
  });

  // Extract the day of the week from the dt_txt
  filteredData.forEach((forecast) => {
    const dtTxtDate = new Date(forecast.dt_txt);
    const dayOfWeek = dtTxtDate.toLocaleString('en-US', { weekday: 'long' });
    forecast.dayOfWeek = dayOfWeek;
  });

 //switch statement that changes weather icon based on icon data fetched from API
  function getIcon(iconCode :string) {
    switch (iconCode) {
      case '01d':
        return 'Sunny';
      case '01n':
        return 'Night';
      case '02d':
        return 'LightCloud';
      case '02n':
        return 'NightCloud';
      case '03':
      case '04':
        return 'Cloudy';
      case '09':
        return 'HeavyRain';
      case '10d':
        return 'Rain';
      case '10n':
        return 'RainyNight';
      case '11':
        return 'Thunder';
      case '13':
        return 'Snowy';
      default:
        return 'Sunny'; //default icon
    }
  }
  return (
    <div className="cardm">
      {/* Displays next 5 days weather forcast*/}

      {/*Day 1*/}
      <div>
        <div className="cardone">
        <div>
  {filteredData[0]?.weather[0].icon && (
    <img src={icons[getIcon(filteredData[0]?.weather[0].icon)]} />
  )}
</div>
          <div className="degrees">{Math.round(filteredData[0]?.main.temp)} °C</div>
          <div className="day"> {filteredData[0]?.dayOfWeek} </div>
        </div>
        <div className="cardtwo">
          <div className="lower">
            <div className="humidity">
              <img src={humidGif}></img>
              <div className="humiditytext">
                Humidity
                <br />
                {filteredData[0]?.main.humidity} %
              </div>
            </div>
            <div className="feelslike">
              <img src={thermoGif}></img>
              <div className="feelsliketext">
                Feels like
                <br />
                {Math.round(filteredData[0]?.main.feels_like)} °C
              </div>
            </div>
            <div className="wind">
              <img src={windGif}></img>
              <div className="windtext">
                Wind
                <br />
                {Math.round(filteredData[0]?.wind.speed)} km/h
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Day 2 */}
      <div>
        <div className="cardone">
        <div>
  {filteredData[1]?.weather[0].icon && (
    <img src={icons[getIcon(filteredData[1]?.weather[0].icon)]} />
  )}
</div>
          <div className="degrees">{Math.round(filteredData[1]?.main.temp)} °C</div>
          <div className="day">{filteredData[1]?.dayOfWeek}</div>
        </div>
        <div className="cardtwo">
          <div className="lower">
            <div className="humidity">
              <img src={humidGif}></img>
              <div className="humiditytext">
                Humidity
                <br />
                {filteredData[1]?.main.humidity} %
              </div>
            </div>
            <div className="feelslike">
              <img src={thermoGif}></img>
              <div className="feelsliketext">
                Feels like
                <br />
                {Math.round(filteredData[1]?.main.feels_like)} °C
              </div>
            </div>
            <div className="wind">
              <img src={windGif}></img>
              <div className="windtext">
                Wind
                <br />
                {Math.round(filteredData[1]?.wind.speed)} km/h
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Day 3 */}
      <div>
        <div className="cardone">
        <div>
  {filteredData[2]?.weather[0].icon && (
    <img src={icons[getIcon(filteredData[2]?.weather[0].icon)]} />
  )}
</div>
          <div className="degrees">{Math.round(filteredData[2]?.main.temp)} °C</div>
          <div className="day">{filteredData[2]?.dayOfWeek}</div>
        </div>
        <div className="cardtwo">
          <div className="lower">
            <div className="humidity">
              <img src={humidGif}></img>
              <div className="humiditytext">
                Humidity
                <br />
                {filteredData[2]?.main.humidity} %
              </div>
            </div>
            <div className="feelslike">
              <img src={thermoGif}></img>
              <div className="feelsliketext">
                Feels like
                <br />
                {Math.round(filteredData[2]?.main.feels_like)} °C
              </div>
            </div>
            <div className="wind">
              <img src={windGif}></img>
              <div className="windtext">
                Wind
                <br />
                {Math.round(filteredData[2]?.wind.speed)} km/h
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/*Day 4*/}
      <div>
        <div className="cardone">
        <div>
  {filteredData[3]?.weather[0].icon && (
    <img src={icons[getIcon(filteredData[3]?.weather[0].icon)]} />
  )}
</div>
          <div className="degrees">{Math.round(filteredData[3]?.main.temp)} °C</div>
          <div className="day">{filteredData[3]?.dayOfWeek}</div>
        </div>
        <div className="cardtwo">
          <div className="lower">
            <div className="humidity">
              <img src={humidGif}></img>
              <div className="humiditytext">
                Humidity
                <br />
                {filteredData[3]?.main.humidity} %
              </div>
            </div>
            <div className="feelslike">
              <img src={thermoGif}></img>
              <div className="feelsliketext">
                Feels like
                <br />
                {Math.round(filteredData[3]?.main.feels_like)} °C
              </div>
            </div>
            <div className="wind">
              <img src={windGif}></img>
              <div className="windtext">
                Wind 
                <br />
                {Math.round(filteredData[3]?.wind.speed)} km/h
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Day 5*/}
      <div>
        <div className="cardone">
        <div>
  {filteredData[4]?.weather[0].icon && (
    <img src={icons[getIcon(filteredData[4]?.weather[0].icon)]} />
  )}
</div>
          <div className="degrees">{Math.round(filteredData[4]?.main.temp)} °C</div>
          <div className="day">{filteredData[4]?.dayOfWeek}</div>
        </div>
        <div className="cardtwo">
          <div className="lower">
            <div className="humidity">
              <img src={humidGif}></img>
              <div className="humiditytext">
                Humidity
                <br />
                {filteredData[4]?.main.humidity} %
              </div>
            </div>
            <div className="feelslike">
              <img src={thermoGif}></img>
              <div className="feelsliketext">
                Feels like
                <br />
                {Math.round(filteredData[4]?.main.feels_like)} °C
              </div>
            </div>
            <div className="wind">
              <img src={windGif}></img>
              <div className="windtext">
                Wind 
                <br />
                {Math.round(filteredData[4]?.wind.speed)} km/h
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
