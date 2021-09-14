import {createAction} from '@reduxjs/toolkit'
import {Data} from './type'

const requestedWeather = createAction('REQUESTED_WEATHER')
const requestedWeatherSucceeded = createAction<Data[]>('REQUESTED_WEATHER_SUCCEEDED')
const requestedWeatherFailed = createAction('REQUESTED_WEATHER_FAILED')

export {requestedWeather, requestedWeatherSucceeded, requestedWeatherFailed}