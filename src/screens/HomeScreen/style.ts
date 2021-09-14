import { StyleSheet } from 'react-native'

export const gStyle = StyleSheet.create<Styles>({
    main: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
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
    title: {
        color: '#F7F21A',
        fontSize: 40,
        textAlign: 'center'
    }
})