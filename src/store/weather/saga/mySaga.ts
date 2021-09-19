import { call, put, takeEvery, all } from 'redux-saga/effects'
import { requestedWeatherFailed, requestedWeatherSucceeded, requestedWeather } from '../../index'
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

function* watcherSaga() {
    yield takeEvery(requestedWeather, workerSaga)
}

function* workerSaga() {
    try {
        const data: Data[] = yield all([
            call(() => axios.request(makeOptions(cities[0])).then((res) => res.data)
            ),
            call(() => axios.request(makeOptions(cities[1])).then((res) => res.data)
            ),
            call(() => axios.request(makeOptions(cities[2])).then((res) => res.data)
            )
        ])
        yield put(requestedWeatherSucceeded(data))
    } catch (error) {
        yield put(requestedWeatherFailed())
    }
}

export default watcherSaga