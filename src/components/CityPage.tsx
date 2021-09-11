import React, { useState, useEffect } from 'react'
import { View, ImageBackground, Text, Image } from 'react-native'
import { gStyle } from '../styles/styles'
import { Data } from '../store/actionCreators'
import {getDayOfWeek, getTemp} from "./GetInfo";

type CityPageProps = {
    item: Data
}

export const CityPage: React.FC<CityPageProps> = ({ item }) => {
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
    }, [])

    const imageUri = { uri: image }

    return (
        <View style={gStyle.city}>
            <View style={gStyle.details}>
                <ImageBackground source={imageUri} resizeMode="cover" style={gStyle.backImage}>
                    <Text style={gStyle.title}>{item.city.name}</Text>
                    <Text style={gStyle.temp}>{getTemp(item.list[0].temp.min)}/{getTemp(item.list[0].temp.max)}{' \u2103'}</Text>
                    <Image source={{uri: `http://openweathermap.org/img/w/${item.list[0].weather[0].icon}.png`}} style={gStyle.icon} />
                    <Text style={gStyle.temp}>{getTemp(item.list[0].temp.day)}{' \u2103'}</Text>
                    <Text style={gStyle.weather}>{item.list[0].weather[0].main}</Text>
                </ImageBackground>
            </View>
            <View style={gStyle.details}>
                <View style={gStyle.dayOfWeek}>
                    <Text>{getDayOfWeek(item.list[0].dt)}</Text>
                    <Image source={{uri: `http://openweathermap.org/img/w/${item.list[0].weather[0].icon}.png`}} style={gStyle.image} />
                    <Text>{getTemp(item.list[0].temp.day)}{' \u2103'}</Text>
                </View>
            </View>
        </View>
    )
}