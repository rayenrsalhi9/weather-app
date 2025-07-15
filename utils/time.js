export function formatTime(milliseconds) {
    const date = new Date(milliseconds * 1000)
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })
}

export function dayOrNight(timestmp) {
    const hours = new Date(timestmp * 1000).getHours()
    if (hours >= 6 && hours < 18) {
        return 'day'
    } else {
        return 'night'
    }
}

export function chooseAppropriateImg(timestmp, data) {
    const daytime = dayOrNight(timestmp)
    const imageSrc = data.weather[0].main === 'Rain' ? '/images/weather/rain.png' :
    data.weather[0].main === 'Clouds' ? '/images/weather/cloud.png' :
    data.weather[0].main === 'Thunderstorm' ? '/images/weather/thunderstorm.png' :
    data.weather[0].main === 'Snow' ? '/images/weather/snow.png' :
    daytime === 'day' ? '/images/weather/sun.png' : '/images/weather/night.png'
    return imageSrc
}