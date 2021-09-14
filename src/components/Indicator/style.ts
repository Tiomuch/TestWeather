import { StyleSheet } from 'react-native'

export const gStyle = StyleSheet.create<Styles>({
    indicatorContainer: {
        position: 'absolute',
        top: 300,
        left: 200,
        flexDirection: 'row'
    },
    indicator: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#F7F21A',
        margin: 10
    }
})