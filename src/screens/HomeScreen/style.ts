import {StyleSheet} from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`

export const Main = styled.View`
  flex: 1;
`

export const StyledButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: grey;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  background-color: aqua;
`

export const Title = styled.Text`
  color: #F7F21A;
  font-size: 40px;
  text-align: center;
`

export const LogoutButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: grey;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  background-color: #FF6666;
  margin-bottom: 5px;
`

export const ErrorText = styled.Text`
  color: red;
  text-align: center;
  font-size: 40px;
`

export const gStyle = StyleSheet.create<Styles>({
    main: {
        flex: 1
    }
})