export function formatTime(milliseconds) {
    const date = new Date(milliseconds * 1000)
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })
}

export function formatTimezone(timezone, dt) {
    const utcTimestamp = dt
    const localTimestamp = utcTimestamp + timezone
    const localTime = new Date(localTimestamp * 1000)

    const hours = localTime.getUTCHours();
    const minutes = localTime.getUTCMinutes();
    const hoursStr = hours.toString().padStart(2, '0');
    const minutesStr = minutes.toString().padStart(2, '0');

    return `${hoursStr}:${minutesStr}`;
}

export function dayOrNight(timezone, dt) {
    const utcTimestamp = dt
    const localTimestamp = utcTimestamp + timezone
    const localTime = new Date(localTimestamp * 1000)

    const hours = localTime.getUTCHours();
    
    if (hours >= 6 && hours < 18) {
        return 'day'
    } else {
        return 'night'
    }
}

export function chooseAppropriateImg(timezone, data) {
    const daytime = dayOrNight(timezone, data.dt)
    const weatherMain = data.weather[0].main
    
    switch (weatherMain) {
        case 'Rain':
            return '/images/weather/rain.png'
        case 'Clouds':
            return '/images/weather/cloud.png'
        case 'Thunderstorm':
            return '/images/weather/thunderstorm.png'
        case 'Snow':
            return '/images/weather/snow.png'
        case 'Hazy':
            return '/images/weather/hazy.png'
        case 'Clear':
            return daytime === 'day' ? '/images/daytime/day.png' : '/images/daytime/night.png'
        default:
            return daytime === 'day' ? '/images/daytime/day.png' : '/images/daytime/night.png'
    }
}