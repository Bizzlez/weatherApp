import "./DailyExpand.css";
import Rain from "./icons/weather_icons/rainy-1.svg";
import Day from "./icons/weather_icons/day.svg";
import Cloud from "./icons/weather_icons/cloudy-day-1.svg";
import HeavyRain from "./icons/weather_icons/rainy-7.svg";
import humidGif from "./icons/humidity.gif";
import thermoGif from "./icons/thermometer.gif";
import windGif from "./icons/wind.gif";
const DailyExpand = () => {
  return (
    <div className="cardm">
      {/* Monday Card */}
      <div>
        <div className="cardone">
          <img src={Rain} />
          <div className="degrees">23 °C</div>
          <div className="day">Monday</div>
        </div>
        <div className="cardtwo">
          <div className="lower">
            <div className="humidity">
              <img src={humidGif}></img>
              <div className="humiditytext">
                Humidity
                <br />
                30%
              </div>
            </div>
            <div className="feelslike">
              <img src={thermoGif}></img>
              <div className="feelsliketext">
                Feels like
                <br />
                21 °C
              </div>
            </div>
            <div className="wind">
              <img src={windGif}></img>
              <div className="windtext">
                Wind
                <br />
                10km/h
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Tuesdya */}
      <div>
        <div className="cardone">
          <img src={Cloud} />
          <div className="degrees">23 °C</div>
          <div className="day">Tuesday</div>
        </div>
        <div className="cardtwo">
          <div className="lower">
            <div className="humidity">
              <img src={humidGif}></img>
              <div className="humiditytext">
                Humidity
                <br />
                30%
              </div>
            </div>
            <div className="feelslike">
              <img src={thermoGif}></img>
              <div className="feelsliketext">
                Feels like
                <br />
                21 °C
              </div>
            </div>
            <div className="wind">
              <img src={windGif}></img>
              <div className="windtext">
                Wind
                <br />
                10km/h
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Wed */}
      <div>
        <div className="cardone">
          <img src={HeavyRain} />
          <div className="degrees">23 °C</div>
          <div className="day">Wednesday</div>
        </div>
        <div className="cardtwo">
          <div className="lower">
            <div className="humidity">
              <img src={humidGif}></img>
              <div className="humiditytext">
                Humidity
                <br />
                30%
              </div>
            </div>
            <div className="feelslike">
              <img src={thermoGif}></img>
              <div className="feelsliketext">
                Feels like
                <br />
                21 °C
              </div>
            </div>
            <div className="wind">
              <img src={windGif}></img>
              <div className="windtext">
                Wind
                <br />
                10km/h
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Thurs*/}
      <div>
        <div className="cardone">
          <img src={Day} />
          <div className="degrees">23 °C</div>
          <div className="day">Thursday</div>
        </div>
        <div className="cardtwo">
          <div className="lower">
            <div className="humidity">
              <img src={humidGif}></img>
              <div className="humiditytext">
                Humidity
                <br />
                30%
              </div>
            </div>
            <div className="feelslike">
              <img src={thermoGif}></img>
              <div className="feelsliketext">
                Feels like
                <br />
                21 °C
              </div>
            </div>
            <div className="wind">
              <img src={windGif}></img>
              <div className="windtext">
                Wind
                <br />
                10km/h
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Friday*/}
      <div>
        <div className="cardone">
          <img src={Rain} />
          <div className="degrees">23 °C</div>
          <div className="day">Friday</div>
        </div>
        <div className="cardtwo">
          <div className="lower">
            <div className="humidity">
              <img src={humidGif}></img>
              <div className="humiditytext">
                Humidity
                <br />
                30%
              </div>
            </div>
            <div className="feelslike">
              <img src={thermoGif}></img>
              <div className="feelsliketext">
                Feels like
                <br />
                21 °C
              </div>
            </div>
            <div className="wind">
              <img src={windGif}></img>
              <div className="windtext">
                Wind
                <br />
                10km/h
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyExpand;
