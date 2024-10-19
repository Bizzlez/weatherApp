import React, { useState } from 'react';
import { ChangeEvent } from "react";
import { cityType, forecastType } from '../types';

// Custom hook for fetching weather data
const useForecast = () => {
  // State variables
  const [term, setTerm] = useState<string>(''); // Search term for the city
  const [city, setCity] = useState<cityType | null>(null); // City data from API
  const [forecast, setForecast] = useState<forecastType | null>(null); // Forecast data 
  const [code, setCode] = useState<string | null>(null); // Weather icon ID for background video

  // Function to fetch city data based on search term
  const getSearchOptions = async (value: string) => {
    try {
      // Fetch weather data from OpenWeather API
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value.trim()}&units=metric&appid=${import.meta.env.REACT_APP_API_KEY}`);
      if (!response.ok) {
        throw new Error(`Error fetching weather data: ${response.statusText}`);
      }
      const data = await response.json();
      setCity(data); // Set city data state
      const iconId = data.weather[0].icon; // Get the weather icon ID
      setCode(iconId); // Set icon ID state
    } catch (error) {
      console.error('Error:', error);
      // Handle errors gracefully in your application
    }
  };

  // Function to fetch hourly forecast based on city coordinates
  const getHourlyForecast = async () => {
    if (!city?.coord) return; // Ensure location data is available

    try {
      // Fetch hourly forecast data from OpenWeather API
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.coord.lat}&lon=${city.coord.lon}&units=metric&appid=${import.meta.env.REACT_APP_API_KEY}`);
      if (!response.ok) {
        throw new Error(`Error fetching hourly forecast: ${response.statusText}`);
      }
      const data = await response.json();

      // Prepare forecast data by slicing the list to the first 40 entries
      const forecastData = {
        ...data.city,
        list: data.list.slice(0, 40),
      };
      setForecast(forecastData); // Set forecast data state
    } catch (error) {
      console.error('Error:', error);
      // Handle errors gracefully in your application
    }
  };

  // Effect to log forecast data when it changes
  React.useEffect(() => {
    if (forecast) {
      console.log(forecast); // Log forecast data for debugging
    } 
  }, [term, city, forecast]); // Dependencies for the effect

  // Function to handle form submission
  const onSubmit = async () => {
    if (!term) return; // Prevent submission if no term is entered
    await getSearchOptions(term); // Fetch city data
    if (city) {
      await getHourlyForecast(); // Fetch forecast data if city is valid
    }
  };

  // Function to handle input changes
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; // Get the input value
    setTerm(value); // Update search term state
    if (value.trim()) {
      getSearchOptions(value); // Fetch suggestions based on input
    }
  };

  // Return states and functions for use in components
  return {
    term, forecast, onInputChange, onSubmit, city, code
  };
};

export default useForecast;