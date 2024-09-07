export const getWeather = async (city) => {
  const appid = import.meta.env.VITE_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&units=metric&appid=${appid}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
