const apiKey = "b1c3221fbd656ef07a847aa0dc6b5ff0";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangladesh";
const getWeather = async () => {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  const data = await response.json();
  const temp = document.querySelectorAll(".temp");
  const temp_max = document.querySelectorAll(".temp_max");
  const temp_min = document.querySelectorAll(".temp_min");
  temp.forEach((e) => {
    e.innerHTML = data.main.temp;
  });
  temp_max.forEach((e) => {
    e.innerHTML = `H: ${data.main.temp_max}`;
  });
  temp_min.forEach((e) => {
    e.innerHTML = `L: ${data.main.temp_min}`;
  });
  console.log(data);
};
getWeather();
const getWeatherInfo = async (city) => {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  const data = await response.json();
};
