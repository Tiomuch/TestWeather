import React, { useState, useEffect } from 'react'
import {View, Text} from 'react-native'
import { CityPageProps } from './type'
import { GetInfo } from '../../utils'
import { OneDay } from '../index'
import { Container, Title, Temp, WeekButton, BackImage, Icon } from './style'

export const CityPage: React.FC<CityPageProps> = ({ item, onPress, index }) => {
    const [image, setImage] = useState<string>('https://ichef.bbci.co.uk/news/640/cpsprodpb/10508/production/_104642866_d6bc46c1-f7a6-4b7e-968a-e4007759dfe5.jpg')

    const images: string[] = [
        'https://remont.sumy.ua/wp-content/uploads/sumy.jpg',
        'https://img.hotels24.ua/photos/ria/news_content/111/11140/1114052/1114052.jpg',
        'https://natviktour.com.ua/wp-content/uploads/2017/01/Odessa-Day.jpg'
    ]

    useEffect(() => {
        switch (item.city.name) {
            case 'Sumy':
                setImage(images[0])
                break
            case 'Lviv':
                setImage(images[1])
                break
            case 'Odesa':
                setImage(images[2])
                break
            default:
                break
        }
    }, [item.city.name])

    return (
        <View>
            <Container>
                <BackImage source={{uri: image}} resizeMode="cover">
                    <Title>{item.city.name}</Title>
                    <Temp>{GetInfo.getTemp(item.list[0].temp.min)}/{GetInfo.getTemp(item.list[0].temp.max)}{' \u2103'}</Temp>
                    <Icon source={{uri: `https://openweathermap.org/img/w/${item.list[0].weather[0].icon}.png`}} />
                    <Temp>{GetInfo.getTemp(item.list[0].temp.day)}{' \u2103'}</Temp>
                    <Temp>{item.list[0].weather[0].main}</Temp>
                </BackImage>
            </Container>
            <Container>
                { item.list.slice(0, 4).map((day) =>  <OneDay key={day.dt.toString()} day={day} />) }
                <WeekButton onPress={() => onPress(index + 1)}>
                    <Text>Weather for two weeks</Text>
                </WeekButton>
            </Container>
        </View>
    )
}