const weatherElement = document.querySelector(".weather");
const temperatureElement = document.querySelector(".weather__temperature");
const locationElement = document.querySelector(".weather__location");

const API_KEY = "e113c82924e2c54c7b4b3d6dab33ebab";
const API_BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;
const COORDS = "coords";

function getWeather(lat, lon) {
  fetch(`${API_BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Weather data fetch failed");
      }
      return response.json();
    })
    .then((data) => {
      const temperatureData = Math.round(data.main.temp);
      const locationData = data.name;
      const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      // 날씨 아이콘 처리 개선
      let icon = weatherElement.querySelector("img");
      if (!icon) {
        icon = new Image(36, 36);
        weatherElement.prepend(icon);
      }
      icon.src = iconURL;

      temperatureElement.innerText = `${temperatureData}°`;
      locationElement.innerText = locationData;
    })
    .catch((error) => {
      console.error(error);
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = { latitude, longitude };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.error("Cannot access your location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

export function getWeatherWithCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const { latitude, longitude } = JSON.parse(loadedCoords);
    getWeather(latitude, longitude);
  }
}
