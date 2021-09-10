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
    feels_like: {
        day: number
        eve: number
        morn: number
        night: number
    }
    pressure: number
    humidity: number
    weather: Weather[]
    speed: number
    deg: number
    gust: number
    pop: number
    clouds: number
}

type WeatherState = {
    weather: ListObject[]
    loading: boolean
    error: boolean
}

type Action = {
    type: string
    payload: ListObject[]
}

const initialState: WeatherState = {
    weather: [],
    loading: false,
    error: false
}

export default function weather(state = initialState, action: Action) {
    switch (action.type){
        case 'REQUESTED_WEATHER':
            return {
                weather: [],
                loading: true,
                error: false
            }
        case 'REQUESTED_WEATHER_SUCCEEDED':
            return {
                weather: action.payload,
                loading: false,
                error: false
            }
        case 'REQUESTED_WEATHER_FAILED':
            return {
                weather: [],
                loading: false,
                error: true
            }
        default:
            return state
    }
}

export type RootState = ReturnType<typeof weather>