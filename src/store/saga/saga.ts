import { call, put, takeEvery } from 'redux-saga/effects'
import { requestWeather, requestWeatherError, requestWeatherSuccess } from '../actionCreators'

function* mySaga() {
    yield takeEvery('FETCHED_WEATHER', fetchWeatherAsync)
}

function* fetchWeatherAsync() {
    try {
        yield put(requestWeather());
        // @ts-ignore
        const data = yield call(() => {
            return fetch("https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=sumy%2Cua&cnt=10&units=metric%20or%20imperial", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                        "x-rapidapi-key": "894f59d50dmshaa7260d160a5535p1318c2jsn424fc22be376"
                    }
                }).then(res => {res.json()})
            }
        )
        yield put(requestWeatherSuccess(data))
    } catch (error) {
        yield put(requestWeatherError())
    }
}

export default mySaga