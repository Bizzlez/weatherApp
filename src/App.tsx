import { ChangeEvent, useState } from "react";
import Boxes from "./assets/components/Boxes";
import DailyForecast from "./assets/components/DailyForecast";
import Footer from "./assets/components/Footer";
import HourlyForecast from "./assets/components/HourlyForecast";
import SearchBar from "./assets/components/SearchBar";
import TimeLocation from "./assets/components/TimeLocation";
import WeatherInfo from "./assets/components/WeatherInfo";

// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


const App = (): JSX.Element => {

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
              <HourlyForecast></HourlyForecast>
            </div>
          </div>
          <div className="carousel-container">
            <DailyForecast></DailyForecast>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
