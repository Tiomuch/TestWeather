export const requestWeather = () => {
    return { type: 'REQUESTED_WEATHER' }
}

interface Data {
    list: any[]
    data: any
}

export const requestWeatherSuccess = (data: Data) => {
    return { type: 'REQUESTED_WEATHER_SUCCEEDED', weather: data.list }
}

export const requestWeatherError = () => {
    return { type: 'REQUESTED_WEATHER_FAILED' }
}

export const fetchWeather = () => {
    return { type: 'FETCHED_WEATHER' }
}