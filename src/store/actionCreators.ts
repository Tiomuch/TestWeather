export const requestWeather = () => {
    return { type: 'REQUESTED_WEATHER' }
}

type Weather = {
    id: number
    main: string
    description: string
    icon: string
}

type ListObject = {
    dt: number
    sunrise: number
    sunset: number
    temp: {
        day: number
        min: number
        max: number
        night: number
        eve: number
        morn: number
    }
    pressure: number
    humidity: number
    weather: Weather[]
    speed: number
    deg: number
    clouds: number
}

type Data = {
    city: {
        id: number
        name: string
        coord?: {
            lon: number
            lat: number
        }
        country: string
        population: number
        timezone: number
    }
    cod: string
    message: number
    cnt: number
    list: ListObject[]
}

export const requestWeatherSuccess = (data: Data) => {
    return { type: 'REQUESTED_WEATHER_SUCCEEDED', payload: data.list }
}

export const requestWeatherError = () => {
    return { type: 'REQUESTED_WEATHER_FAILED' }
}

export const fetchWeather = () => {
    return { type: 'FETCHED_WEATHER' }
}