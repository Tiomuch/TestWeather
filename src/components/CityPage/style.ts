import {Dimensions, StyleSheet} from 'react-native'

const { width } = Dimensions.get('screen')

export const gStyle = StyleSheet.create<Styles>({
    city: {
        marginRight: 6
    },
    details: {
        flex: 1,
        height: '100%'
    },
    backImage: {
        flex: 1,
        width: width * 0.89,
        height: '100%'
    },
    title: {
        color: '#F7F21A',
        fontSize: 40,
        textAlign: 'center'
    },
    temp: {
        color: '#F7F21A',
        fontSize: 35,
        marginTop: 10,
        marginLeft: 10
    },
    icon: {
        width: 80,
        height: 80,
        marginTop: 10,
        marginLeft: 10
    },
    weather: {
        color: '#F7F21A',
        fontSize: 35,
        marginTop: 10,
        marginLeft: 10
    },
    weekButton: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: 'aqua',
        marginBottom: 10
    }
})