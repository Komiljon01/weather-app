const api = {
  key: 'bf1165d3a22167b65321cb5bc33f834e',
  baseurl: 'https://api.openweathermap.org/data/2.5/',
};

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener('keypress', setQuery)

function setQuery(e) {
  if(e.keyCode === 13) {
    getResults(searchBox.value);
    console.log(searchBox.value);
  }
}
function getResults (query) {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&appid=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResult);
}

function displayResult(weather) {
  console.log(weather);
  let city = document.querySelector('.location .city');
  city.innerHTML = `${weather.name}, ${weather.sys.country}`

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerHTML = dateBuilder(now);

  let temp = document.querySelector(".temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`

  let weatherEl = document.querySelector('.weather');
  weatherEl.innerHTML = weather.weather[0].main

  let hilow = document.querySelector(".hi-low");
  hilow.innerHTML = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`
}

function dateBuilder(k) {
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
    ];
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    let day = days[k.getDay()];
    let date = k.getDate();
    let month = months[k.getMonth()];
    let year = k.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}

