import {DayProps} from './type'
import React from 'react'
import {Image, Text, View} from 'react-native'
import {gStyle} from './style'
import { GetInfo } from '../../utils'

export const DayOfList: React.FC<DayProps> = ({day}) => {
    return (
        <View style={gStyle.dayOfList}>
            <View style={gStyle.dayOfWeek}>
                <Text style={gStyle.dayText}>{GetInfo.getDayOfWeek(day.dt)}</Text>
                <Text style={gStyle.dayText}>{GetInfo.getDate(day.dt)}</Text>
            </View>
            <View style={gStyle.dayOfWeek}>
                <Text style={gStyle.dayText}>{day.weather[0].main}</Text>
                <Image source={{uri: `http://openweathermap.org/img/w/${day.weather[0].icon}.png`}} style={gStyle.image} />
            </View>
            <View style={gStyle.dayOfWeek}>
                <Text style={gStyle.dayText}>Temp</Text>
                <Text style={gStyle.dayText}>{GetInfo.getTemp(day.temp.min)}/{GetInfo.getTemp(day.temp.max)}{' \u2103'}</Text>
            </View>
        </View>
    )
}