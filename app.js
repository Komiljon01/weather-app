const api = {
  key: 'bf1165d3a22167b65321cb5bc33f834e',
  baseurl: 'api.openweathermap.org/data/2.5/',
};

const searchBox = document.querySelector(".search-box");

searchBox.addEventListener('keypress', setQuery)

function setQuery(e) {
  if(e.keyCode == 13) {
    console.log(searchBox.value);
  }
}