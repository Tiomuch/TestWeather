interface WeatherState {
    weather: any[]
    loading: boolean
    error: boolean
}

const initialState: WeatherState = {
    weather: [],
    loading: false,
    error: false
}

export default function weather(state = initialState, action: { type: any; payload: any }): WeatherState {
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