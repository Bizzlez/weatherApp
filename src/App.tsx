import Boxes from "./assets/components/Boxes";
import DailyExpand from "./assets/components/DailyExpand";
import DailyForecast from "./assets/components/DailyForecast";
import SearchBar from "./assets/components/SearchBar";
import TimeLocation from "./assets/components/TimeLocation";

import WeatherInfo from "./assets/components/WeatherInfo";

const App = () => {
  return (
    <div>
      <h1 className="WeatherApp">WeatherApp</h1>
      <div className="container-one">
        <div className="container-searchbar">
          <SearchBar></SearchBar>
        </div>
        <div className="container-two">
          <div className="weather-card">
            <div className="card">
              <div className="card-header">
                <TimeLocation></TimeLocation>
              </div>
              <Boxes></Boxes>
              <WeatherInfo />
            </div>
          </div>
          <div className="carousel-container">
            <DailyExpand></DailyExpand>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
