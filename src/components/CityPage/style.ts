import {Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { width } = Dimensions.get('screen')

export const Container = styled.View`
  flex: 1;
`

export const Title = styled.Text`
  color: #F7F21A;
  font-size: ${width * 0.1}px;
  text-align: center;
`

export const Temp = styled.Text`
  color: #F7F21A;
  font-size: ${width * 0.08}px;
  margin-top: 10px;
  margin-left: 10px;
`

export const WeekButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: grey;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  background-color: aqua;
  margin-bottom: 10px;
`

export const BackImage = styled.ImageBackground`
  flex: 1;
  width: ${width}px;
`

export const Icon = styled.Image`
  width: ${width * 0.2}px;
  height: ${width * 0.2}px;
  margin-top: 10px;
  margin-left: 10px;
`