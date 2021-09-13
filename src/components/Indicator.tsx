import React from 'react'
import {View, Animated, Dimensions} from 'react-native'
import {Data} from '../store/actionCreators'
import {gStyle} from '../styles/styles'

const { width } = Dimensions.get('screen')

type ScrollX = {
    scrollX: Animated.Value
    weather: Data[]
}

export const Indicator: React.FC<ScrollX> = ({scrollX, weather}) => {
    return (
        <View style={gStyle.indicatorContainer}>
            {weather.map((_, index) => {
                const inputRange = [(index - 1) * width, index * width, (index + 1) * width]

                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.8, 1.4, 0.8],
                    extrapolate: 'clamp'
                })

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.6, 0.9, 0.6],
                    extrapolate: 'clamp'
                })

                return (
                    <Animated.View
                        key={`indicator-${index}`}
                        style={[gStyle.indicator, {
                            opacity,
                            transform: [
                                {
                                    scale
                                }
                            ]
                        }]}
                    />
                )
            })}
        </View>
    )
}