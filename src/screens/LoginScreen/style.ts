import { StyleSheet } from 'react-native'

export const gStyle = StyleSheet.create<Styles>({
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
    button: {
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: 'aqua'
    }
})