import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    mainView: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    logo: {
        borderColor: 'black',
        borderWidth: 3,
        height: 300,
        width: 300
    },
    h1: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    stretchButtons: {
        alignItems: 'stretch',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    spacer: {
        marginVertical: 6
    }
});