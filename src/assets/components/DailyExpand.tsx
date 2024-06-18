import "./DailyExpand.css";
import Rain from "./icons/weather_icons/rainy-1.svg";

const DailyExpand = () => {
  return (
    <div className="cardm">
      {/* Monday Card */}
      <div>
        <div className="cardone">
          <img src={Rain} />
          <div className="main">23 °C</div>
          <div className="day">Monday</div>
        </div>
        <div className="cardtwo">
          <div className="upper">
            <div className="humidity">
              <div className="humiditytext">
                Humidity
                <br />
                30%
              </div>
            </div>
            <div className="air">
              <div className="airtext">
                Wind
                <br />8 Km/h
              </div>
            </div>
            <div className="lower">
              <div className="aqi">
                <div className="aqitext">
                  AQI
                  <br />
                  30
                </div>
              </div>

              <div className="realfeel">
                <div className="realfeeltext">
                  Real Feel
                  <br />
                  21 °C
                </div>
              </div>

              <div className="pressure">
                <div className="pressuretext">
                  Pressure
                  <br />
                  1012 mbar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyExpand;
