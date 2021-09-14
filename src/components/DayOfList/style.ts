import { StyleSheet} from 'react-native'

export const gStyle = StyleSheet.create<Styles>({
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