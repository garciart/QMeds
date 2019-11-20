import { Dimensions, StyleSheet } from 'react-native'

const win = Dimensions.get('window');

export default StyleSheet.create({
    mainView: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    openMapView: {
        flex: 1,
        padding: 20
    },
    aboutView: {
        backgroundColor: 'white',
        flex: 1,
        padding: 20
    },
    logo: {
        borderColor: 'black',
        borderWidth: 3,
        // resizeMode: "contain",
        height: win.width * .7,
        width: win.width * .7
    },
    h1: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    item: {
        padding: 10,
        fontSize: 18,
    },
    spacer: {
        marginVertical: 6
    },
    hr: {
        borderColor: 'black',
        borderWidth: StyleSheet.hairlineWidth,
        marginBottom: 5,
        marginTop: 5
    }
});