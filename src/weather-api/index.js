export const getWeather = async (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&units=metric&appid=1bc5462df0a917364b4f47ef027014ef`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
