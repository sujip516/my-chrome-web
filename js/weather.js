const API_KEY = "dcb8da51b27eedb395375136b9eba84c";

function geolocation(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}`;
    });
}

function geoFalse() {
  alert("I can't find your room!");
}

navigator.geolocation.getCurrentPosition(geolocation, geoFalse);
