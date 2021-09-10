import { Data } from '../actionCreators'

type WeatherState = {
    weather: Data[]
    loading: boolean
    error: boolean
}

type Action = {
    type: string
    payload: Data[]
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