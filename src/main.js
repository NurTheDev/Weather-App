const apiKey = "b1c3221fbd656ef07a847aa0dc6b5ff0";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangladesh";
const getWeather = async (city) => {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
};
getWeather();
