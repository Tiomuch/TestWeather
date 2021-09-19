import {DayProps} from './type'
import React from 'react'
import {GetInfo} from '../../utils'
import { DayOfWeek, DayText, StyledImage } from './style'

export const OneDay: React.FC<DayProps> = ({day}) => {
    return (
        <DayOfWeek>
            <DayText>{GetInfo.getDayOfWeek(day.dt)}</DayText>
            <StyledImage source={{uri: `https://openweathermap.org/img/w/${day.weather[0].icon}.png`}} />
            <DayText>{GetInfo.getTemp(day.temp.day)}{' \u2103'}</DayText>
        </DayOfWeek>
    )
}