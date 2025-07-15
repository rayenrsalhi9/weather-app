import { formatTime, chooseAppropriateImg, formatTimezone } from './time.js'

const api_key = 'da767889a462bb73b7ba8b39ec5fee68'
const weatherCard = document.getElementById('weather-card-info')

export function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        weatherCard.innerHTML = data.cod === 200 ? `
            <p class="country-name">
                <img src="/images/location.png" alt="location icon">
                ${data.name}, ${data.sys.country}
            </p>
            <p class="current-time">${formatTimezone(data.timezone, data.dt)}</p>
            <div class="weather-container">
                <div class="temperature">
                    <h1 class="temp-value">
                        ${data.main.temp.toFixed(0)}°
                    </h1>
                    <span>Min: ${data.main.temp_min.toFixed(1)}° - Max: ${data.main.temp_max.toFixed(1)}°</span>
                </div>
                <div class="weather-description">
                    <img src="${chooseAppropriateImg(data.timezone, data)}" alt="weather icon">
                    <p>${data.weather[0].main}</p>
                </div>
            </div>
            <div class="general">
                <div class="humidity">
                    <img src="/images/humidity.png" alt="humidity icon">
                    <p class="title">Humidity</p>
                    <p>${data.main.humidity}%</p>
                </div>
                <div class="wind">
                    <img src="/images/wind.png" alt="wind icon">
                    <p class="title">Wind</p>
                    <p>${data.wind.speed}km/h</p>
                </div>
                <div class="sunset-sunrise-time">
                    <div class="sunrise">
                        <img src="/images/daytime/sunrise.png" alt="sunrise">
                        <p class="title">Sunrise</p>
                        <p>${formatTimezone(data.timezone, data.sys.sunrise)}</p>
                    </div>
                    <div class="sunset">
                        <img src="/images/daytime/sunset.png" alt="sunset">
                        <p class="title">Sunset</p>
                        <p>${formatTimezone(data.timezone, data.sys.sunset)}</p>

                    </div>
                </div>
            </div>` : 
            `
                <div class="error">
                    <img src="/images/confused.png" alt="error icon">
                    <p>${data.message}</p>
                </div>
            `
    })
}