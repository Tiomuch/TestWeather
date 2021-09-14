import { Data } from './type'

const requestWeather = () => {
    return { type: 'REQUESTED_WEATHER' }
}

const requestWeatherSuccess = (data: Data[]) => {
    return { type: 'REQUESTED_WEATHER_SUCCEEDED', payload: data }
}

const requestWeatherError = () => {
    return { type: 'REQUESTED_WEATHER_FAILED' }
}

const fetchWeather = () => {
    return { type: 'FETCHED_WEATHER' }
}

export {fetchWeather, requestWeatherError, requestWeatherSuccess, requestWeather}