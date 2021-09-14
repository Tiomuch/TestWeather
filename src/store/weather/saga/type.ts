import {Method} from 'axios'

export type Options = {
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

export type ListObject = {
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

export type Data = {
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