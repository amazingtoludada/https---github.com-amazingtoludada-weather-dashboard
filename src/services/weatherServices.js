const apiKey = '[INSERT API KEY HERE]';
const baseUrl = 'https://api.openweathermap.org/data/2.5';

function fetchWeather(city) {
  return fetch(`${baseUrl}/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .catch(error => console.error('Fetching weather data failed:', error));
}

export default fetchWeather;
