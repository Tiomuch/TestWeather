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
    image: {
        flex: 1,
        width: width * 0.9,
        height: '100%'
    },
    details: {
        flex: 1,
        /*width: '100%',*/
        height: '100%'
    }
})