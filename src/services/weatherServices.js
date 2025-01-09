const apiKey = 'cc66a046f77819d083da52f9e96c56c8';
const baseUrl = 'https://api.openweathermap.org/data/2.5';

function fetchWeather(city) {
  return fetch(`${baseUrl}/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .catch(error => console.error('Fetching weather data failed:', error));
}

export default fetchWeather;
