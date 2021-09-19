import {DayProps} from './type'
import React from 'react'
import { GetInfo } from '../../utils'
import { DayOfListStyled, DayOfWeek, DayText, StyledImage } from './style'

export const DayOfList: React.FC<DayProps> = ({day}) => {
    return (
        <DayOfListStyled>
            <DayOfWeek>
                <DayText>{GetInfo.getDayOfWeek(day.dt)}</DayText>
                <DayText>{GetInfo.getDate(day.dt)}</DayText>
            </DayOfWeek>
            <DayOfWeek>
                <DayText>{day.weather[0].main}</DayText>
                <StyledImage source={{uri: `https://openweathermap.org/img/w/${day.weather[0].icon}.png`}} />
            </DayOfWeek>
            <DayOfWeek>
                <DayText>Temp</DayText>
                <DayText>{GetInfo.getTemp(day.temp.min)}/{GetInfo.getTemp(day.temp.max)}{' \u2103'}</DayText>
            </DayOfWeek>
        </DayOfListStyled>
    )
}