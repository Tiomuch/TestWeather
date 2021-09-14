import {DayProps} from './type'
import React from 'react'
import {Image, Text, View} from 'react-native'
import {gStyle} from './style'
import {GetInfo} from '../index'

export const OneDay: React.FC<DayProps> = ({day}) => {
    return (
        <View style={gStyle.dayOfWeek}>
            <Text style={gStyle.dayText}>{GetInfo.getDayOfWeek(day.dt)}</Text>
            <Image source={{uri: `http://openweathermap.org/img/w/${day.weather[0].icon}.png`}} style={gStyle.image} />
            <Text style={gStyle.dayText}>{GetInfo.getTemp(day.temp.day)}{' \u2103'}</Text>
        </View>
    )
}