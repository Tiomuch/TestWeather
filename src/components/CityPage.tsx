import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { gStyle } from '../styles/styles'

const image = { uri: "https://reactjs.org/logo-og.png" }

export const CityPage: React.FC = () => {
    return (
        <View>
            <View style={gStyle.details}>
                <ImageBackground source={image} resizeMode="cover" style={gStyle.image}>
                    <Text>1</Text>
                </ImageBackground>
            </View>
            <View style={gStyle.details}>
                <Text>2</Text>
            </View>
        </View>
    )
}