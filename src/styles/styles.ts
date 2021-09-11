import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')

export const gStyle = StyleSheet.create<Styles>({
    main: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5
    },
    text: {
        color: 'blue',
        marginTop: 20
    },
    errorText: {
      color: 'red',
      textAlign: 'center',
      fontSize: 40
    },
    button: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: 'aqua'
    },
    logoutButton: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#FF6666'
    },
    backImage: {
        flex: 1,
        width: width * 0.89,
        height: '100%'
    },
    details: {
        flex: 1,
        height: '100%'
    },
    city: {
        marginRight: 6
    },
    icon: {
        width: 80,
        height: 80,
        marginTop: 10,
        marginLeft: 10
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
    weather: {
        color: '#F7F21A',
        fontSize: 35,
        marginTop: 10,
        marginLeft: 10
    },
    dayOfWeek: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10
    },
    image: {
        width: 40,
        height: 40
    },
    dayText: {
        fontSize: 20
    },
    weekButton: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: 'aqua',
        marginBottom: 10
    },
    dayOfList: {
        justifyContent: 'space-between',
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5
    }
})