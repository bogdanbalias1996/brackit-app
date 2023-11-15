import { StyleSheet } from 'react-native'
import { colorLightBlue, colorShadow, colorBlack, colorTextGray, colorVeryLightBlue } from '../../variables';

export default StyleSheet.create({
    iconCancel: {
        marginRight: 15
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    card: {
        paddingVertical: 15,
        marginVertical: 20,
        marginRight: 30,
        backgroundColor: "white",
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        shadowColor: colorShadow,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 8
    },
    questionItem: {
        marginVertical: 5,
        paddingLeft: 45,
        position: "relative",
        paddingRight: 15
    },
    questionIcon: {
        position: "absolute",
        top: 0,
        left: 20
    },
    answerText: {
        fontSize: 13,
        fontFamily: "montserrat-medium",
        color: colorBlack
    },
    cardTitle: {
        fontSize: 14,
        fontFamily: "montserrat-semibold",
        color: colorBlack
    },
    proposalsText: {
        fontSize: 14,
        fontFamily: "montserrat-medium",
        color: colorTextGray,
        width: '100%',
        textAlign: 'center',
        marginBottom: 20,
    },
})