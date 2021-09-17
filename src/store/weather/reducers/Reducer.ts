import { createReducer } from '@reduxjs/toolkit'
import { WeatherState } from './type'
import { requestedWeather, requestedWeatherFailed, requestedWeatherSucceeded } from '../../index'

const initialState: WeatherState = {
    weather: [],
    loading: false,
    error: false
}

export const weatherReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(requestedWeather, (state) => {
            return {
                ...state,
                loading: true
            }
        })
        .addCase(requestedWeatherSucceeded, (state, action) => {
            return {
                ...state,
                weather: action.payload,
                loading: false
            }
        })
        .addCase(requestedWeatherFailed, (state) => {
            return {
                ...state,
                loading: false,
                error: true
            }
        })
})

export type RootState = ReturnType<typeof weatherReducer>