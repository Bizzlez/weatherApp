import Boxes from "./assets/components/Boxes";
import DailyForecast from "./assets/components/DailyForecast";
import HourlyForecast from "./assets/components/HourlyForecast";
import SearchBar from "./assets/components/SearchBar";
import TimeLocation from "./assets/components/TimeLocation";
import WeatherInfo from "./assets/components/WeatherInfo";
import useForecast from "./assets/components/Hooks/useForecast";
import Video from "./assets/components/Video";
import Footer from "./assets/components/Footer";

const App = () => {
  const { term, forecast, onInputChange, onSubmit, city, code } = useForecast();


  return (
    <div>
      {/*background that changes based on current weather conditions*/}
      <Video code={code} />
      <h1 className="WeatherApp">WeatherApp</h1>
      <div className="container-one">
        <div className="container-searchbar">
          <SearchBar term={term} onInputChange={onInputChange} onSubmit={onSubmit} />
        </div>
        <div className="container-two">
          {forecast && ( // Only render if forecast data exists
            <div className="weather-card">
              <div className="card">
                <div className="card-header">
                  {/*Shows city location and local time*/}
                  <TimeLocation data={forecast} cityTime={city} />
                </div>
                
                <Boxes data={forecast} /> {/* displays current weather conditions*/}
                <WeatherInfo data={forecast} cityTime={city} /> {/*sunrise, sunset, high, low data*/}
                <HourlyForecast data={forecast} /> {/* displays the next 5 weather forecasts, each representing a 3-hour increment */ }
              </div>
            </div>
          )}
          <div className="carousel-container">
            {forecast && <DailyForecast data={forecast} />}  {/* Conditionally render DailyForecast and displays the next 5 days weather forecast */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;