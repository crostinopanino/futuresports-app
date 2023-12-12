import React from 'react';
import withBackground from './withBackground';
import ReactWeather, { useOpenWeather } from "react-open-weather";

const WeatherDashboard = () => {

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '200fc101760c08f6ca7f64e485742d16', 
    lat: '37.8136',
    lon: '144.9631',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  return (
    <div className="WeatherDashboard" id="WeatherDashboard">
      <h3>Weather Information</h3>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Melbourne"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      />
    </div>
  );
};

export default withBackground(WeatherDashboard); // Wrapped with the HOC