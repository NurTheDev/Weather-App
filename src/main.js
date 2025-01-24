document.addEventListener("DOMContentLoaded", () => {
  const invalid = document.querySelector(".invalid");
  const searchCard = document.querySelector("#searchCard");
  const defultCard = document.querySelector("#defultCard");
  const apiKey = "b1c3221fbd656ef07a847aa0dc6b5ff0";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const search = document.querySelector("input");
  const searchBtn = document.querySelector("#searchBtn");
  const getWeather = async (value) => {
    const response = await fetch(apiUrl + `${value}&appid=${apiKey}`);
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
  searchBtn.addEventListener("click", () => {
    getWeather(search.value);
    getWeatherInfo(search.value);
  });
  // getWeather(search);

  const getWeatherInfo = async (city) => {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
      invalid.classList.add("block");
      invalid.classList.remove("hidden");
      searchCard.classList.add("hidden");
      searchCard.classList.remove("block");
      defultCard.classList.remove("flex");
      defultCard.classList.add("hidden");
    } else {
      const data = await response.json();
      const searchTemp = document.querySelector(".searchTemp");
      const searchMaxTemp = document.querySelector(".searchMaxTemp");
      const searchMinTemp = document.querySelector(".searchMaxTemp");
      searchTemp.innerHTML = `${Math.round(data.main.temp)}°`;
      searchMaxTemp.innerHTML = `H: ${Math.round(data.main.temp_max)}`;
      searchMinTemp.innerHTML = `L: ${Math.round(data.main.temp_min)}`;
      const condition = document.querySelector("#condition");
      condition.innerHTML = data.weather[0].description;
      const humidity = document.querySelector("#humidity");
      const wind = document.querySelector("#wind");
      const name = document.querySelector(".name");
      name.innerHTML = data.name;
      humidity.innerHTML = `${data.main.humidity}%`;
      wind.innerHTML = `${data.wind.speed} km/h`;
      console.log("data");
      searchCard.classList.remove("hidden");
      searchCard.classList.add("flex");
      defultCard.classList.remove("flex");
      defultCard.classList.add("hidden");
    }
  };
});
