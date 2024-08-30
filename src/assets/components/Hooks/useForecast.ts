import React, { useState } from 'react';
import { ChangeEvent } from "react";
import { cityType, forecastType } from '../types';
import.meta.env
const useForecast = () => {
  const [term, setTerm] = useState<string>('');
  const [city, setCity] = useState<cityType | null>(null);
  const [forecast, setForecast] = useState<forecastType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getSearchOptions = async (value: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value.trim()}&units=metric&appid=${import.meta.env.REACT_APP_API_KEY}`);
      if (!response.ok) {
        throw new Error(`Error fetching weather data: ${response.statusText}`);
      }
      const data = await response.json();
      setCity(data);
      console.log(city);
    } catch (error) {
      console.error('Error:', error);
      // Handle errors more gracefully in your application
    } finally {
      setIsLoading(false);
    }
  };

  const getHourlyForecast = async () => {
    if (!city?.coord) return; // Check if location data is available

    try {
      setIsLoading(true);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.coord.lat}&lon=${city.coord.lon}&units=metric&appid=${import.meta.env.REACT_APP_API_KEY}`);
      if (!response.ok) {
        throw new Error(`Error fetching hourly forecast: ${response.statusText}`);
      }
      const data = await response.json();

      const forecastData = {
        ...data.city,
        list: data.list.slice(0, 40),
      };
      setForecast(forecastData);
    } catch (error) {
      console.error('Error:',   
 error);
      // Handle errors more gracefully in your application
    } finally {
      setIsLoading(false);
    }
  };

    React.useEffect(() => {
      if (forecast) {
        console.log(forecast);
      }
    }, [forecast]);
    //onsubmit searches
  const onSubmit = async () => {
    if (!term) return;
    await getSearchOptions(term);
    if (city) {
      await getHourlyForecast();
      
    }
    
  };
  
  //sets the term for whenever the user inputs a character
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(value);
    if (value.trim()) {
      getSearchOptions(value);
    }
  };

  return{
    term,forecast,onInputChange,onSubmit,isLoading,city
  };
  

};
export default useForecast  