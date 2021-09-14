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
            state.weather = []
            state.loading = true
            state.error = false
        })
        .addCase(requestedWeatherSucceeded, (state, action) => {
            state.weather = action.payload
            state.error = false
            state.loading = false
        })
        .addCase(requestedWeatherFailed, (state) => {
            state.weather = []
            state.loading = false
            state.error = true
        })
})

export type RootState = ReturnType<typeof weatherReducer>