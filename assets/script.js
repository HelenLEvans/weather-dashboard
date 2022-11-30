var apiKey = "16cf8f7722128db088ab832bd313fe69";
var history = JSON.parse(window.localStorage.getItem('history')) || [];

var searchInput = document.getElementById("search");
var searchForm = document.querySelector("#searchForm");

function getWeatherData(event) {
  event.preventDefault();
  var cityName = searchInput.value;
  console.log(cityName);
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

searchForm.addEventListener("submit", getWeatherData);
