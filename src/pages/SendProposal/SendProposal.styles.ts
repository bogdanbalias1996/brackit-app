import { StyleSheet } from 'react-native'
import { colorBlack } from '../../variables';

export default StyleSheet.create({
    iconCancel: {
        marginRight: 15
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingTop: 30,
    },
    btnSubmit: {
        marginBottom: 30
    },
    input: {
        textAlignVertical: "top",
        fontSize: 16,
        fontFamily: "montserrat-medium",
        color: colorBlack
    }
})