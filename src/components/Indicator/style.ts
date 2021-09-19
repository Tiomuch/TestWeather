import {Dimensions, StyleSheet} from 'react-native'
import styled from 'styled-components/native'

const { width } = Dimensions.get('screen')

export const IndicatorContainer = styled.View`
  position: absolute;
  top: ${width * 0.7}px;
  left: ${width * 0.6}px;
  flex-direction: row;
`

export const gStyle = StyleSheet.create<Styles>({
    indicator: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#F7F21A',
        margin: 10
    }
})