import {ListObject} from '../store/actionCreators'
import React from 'react'
import {Image, Text, View} from 'react-native'
import {gStyle} from '../styles/styles'
import {getDayOfWeek, getTemp} from './GetInfo'

type DayProps = {
    day: ListObject
}

export const OneDay: React.FC<DayProps> = ({day}) => {
    return (
        <View style={gStyle.dayOfWeek}>
            <Text style={gStyle.dayText}>{getDayOfWeek(day.dt)}</Text>
            <Image source={{uri: `http://openweathermap.org/img/w/${day.weather[0].icon}.png`}} style={gStyle.image} />
            <Text style={gStyle.dayText}>{getTemp(day.temp.day)}{' \u2103'}</Text>
        </View>
    )
}