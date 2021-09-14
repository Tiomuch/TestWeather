import { call, put, takeEvery } from 'redux-saga/effects'
import { requestWeatherSuccess, requestWeather, requestWeatherError } from '../../../store'
import axios from 'axios'
import { Data, Options } from './type'

const cities: string[] = ['sumy,ua', 'lviv,ua', 'odesa,ua']

const makeOptions = (city: string) => {
    const options: Options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
        params: {q: city, cnt: '14', units: 'metric or imperial'},
        headers: {
            'content-type': 'application/json; charset=utf-8',
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': '894f59d50dmshaa7260d160a5535p1318c2jsn424fc22be376'
        }
    }
    return options
}

function* mySaga() {
    yield takeEvery('FETCHED_WEATHER', fetchWeatherAsync)
}

function* fetchWeatherAsync() {
    try {
        yield put(requestWeather())

        const data1: Data = yield call(() => {
                return axios.request(makeOptions(cities[0])).then((res) => {return res.data})
            }
        )
        const data2: Data = yield call(() => {
                return axios.request(makeOptions(cities[1])).then((res) => {return res.data})
            }
        )
        const data3: Data = yield call(() => {
                return axios.request(makeOptions(cities[2])).then((res) => {return res.data})
            }
        )

        const data: Data[] = [data1, data2, data3]
        yield put(requestWeatherSuccess(data))
    } catch (error) {
        yield put(requestWeatherError())
    }
}

export default mySaga