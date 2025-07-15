import { fetchWeather } from './utils/weather.js'

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const city = form.elements['city'].value
    fetchWeather(city)
    form.reset()
})
