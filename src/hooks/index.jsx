import { useState } from "react";
import { getWeather } from "../weather-api";

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const searchWeatherByCity = async (city) => {
    const data = await getWeather(city);
    if (data.cod === "404") {
      setNotFound(true);
      setWeather(null);
      return;
    }
    setWeather({
      icon: data.weather[0].icon,
      description: data.weather[0].description,
      temperature: Math.round(data.main.temp),
      humidity: `${data.main.humidity}%`,
      windSpeed: `${Math.round(data.wind.speed)}m/s`,
    });
  };

  return {
    weather,
    notFound,
    searchWeatherByCity,
  };
};
