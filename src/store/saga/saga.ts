import { call, put, takeEvery } from 'redux-saga/effects'
import { requestWeather, requestWeatherError, requestWeatherSuccess } from '../actionCreators'
import axios, {Method} from 'axios'

type Options = {
    method: Method
    url: string
    params: {
        q: string
        cnt: string
        units: string
    }
    headers: {
        'content-type': string
        'x-rapidapi-host': string
        'x-rapidapi-key': string
    }
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

const options: Options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
    params: {q: 'sumy,ua', cnt: '5', units: 'metric or imperial'},
    headers: {
        'content-type': 'application/json; charset=utf-8',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '894f59d50dmshaa7260d160a5535p1318c2jsn424fc22be376'
    }
}

function* mySaga() {
    yield takeEvery('FETCHED_WEATHER', fetchWeatherAsync)
}

function* fetchWeatherAsync() {
    try {
        yield put(requestWeather());
        const data: Data = yield call(() => {
            return axios.request(options).then((res) => {return res.data})
            }
        )
        yield put(requestWeatherSuccess(data))
    } catch (error) {
        console.log(error)
        yield put(requestWeatherError())
    }
}

export default mySaga