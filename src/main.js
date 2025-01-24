document.addEventListener("DOMContentLoaded", () => {
  const invalid = document.querySelector(".invalid");
  const searchCard = document.querySelector("#searchCard");
  const defultCard = document.querySelector("#defultCard");
  const weatherIcon = document.querySelector("#weatherIcon");
  const apiKey = "b1c3221fbd656ef07a847aa0dc6b5ff0";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const search = document.querySelector("input");
  const searchBtn = document.querySelector("#searchBtn");

  const updateWeatherElements = (data) => {
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
  };

  const updateSearchCard = (data) => {
    const searchTemp = document.querySelector(".searchTemp");
    const searchMaxTemp = document.querySelector(".searchMaxTemp");
    const searchMinTemp = document.querySelector(".searchMinTemp");
    const condition = document.querySelector("#condition");
    const humidity = document.querySelector("#humidity");
    const wind = document.querySelector("#wind");
    const name = document.querySelector(".name");

    searchTemp.innerHTML = `${Math.round(data.main.temp)}°`;
    searchMaxTemp.innerHTML = `H: ${Math.round(data.main.temp_max)}`;
    searchMinTemp.innerHTML = `L: ${Math.round(data.main.temp_min)}`;
    condition.innerHTML = data.weather[0].description;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed} km/h`;
    name.innerHTML = data.name;
  };

  const toggleVisibility = (isValid) => {
    if (isValid) {
      invalid.classList.add("hidden");
      invalid.classList.remove("block");
      searchCard.classList.remove("hidden");
      searchCard.classList.add("flex");
      defultCard.classList.remove("flex");
      defultCard.classList.add("hidden");
    } else {
      invalid.classList.add("block");
      invalid.classList.remove("hidden");
      searchCard.classList.add("hidden");
      searchCard.classList.remove("block");
      defultCard.classList.remove("flex");
      defultCard.classList.add("hidden");
    }
  };
  const changeWetherImg = (data) => {
    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "/image/sun.svg";
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.src = "/image/haze.svg";
    } else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "/image/cloudy.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "/image/snow.png";
    }
    console.log(data);
  };
  const getWeather = async (value) => {
    const response = await fetch(apiUrl + `${value}&appid=${apiKey}`);
    const data = await response.json();
    updateWeatherElements(data);
  };

  const getWeatherInfo = async (city) => {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
      toggleVisibility(false);
    } else {
      const data = await response.json();
      updateSearchCard(data);
      changeWetherImg(data);
      toggleVisibility(true);
    }
  };

  searchBtn.addEventListener("click", () => {
    getWeather(search.value);
    getWeatherInfo(search.value);
  });
});
