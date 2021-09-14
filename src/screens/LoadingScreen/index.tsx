import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { gStyle } from './style'

export default function LoadingScreen() {
    return (
        <View style={gStyle.container}>
            <ActivityIndicator color="#000" size="large" />
        </View>
    )
}