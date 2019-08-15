import { StyleSheet } from 'react-native'
import { colorBlack, colorTextGray, colorBorder } from '../../variables';

export default StyleSheet.create({
    iconCancel: {
        marginRight: 15
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 14,
        fontFamily: "montserrat-semibold",
        color: colorBlack,
        marginBottom: 15,
        marginHorizontal: 25,
    },
    itemWrap: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: colorBorder
    },
    itemLeft: {
        flex: 2,
        flexDirection: 'row',
    },
    itemRight: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    wrapSearch: {
        marginTop: 25
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 10,
    },
    itemName: {
        fontSize: 14,
        fontFamily: "montserrat-semibold",
        color: colorBlack,
    },
    itemLocation: {
        fontSize: 12,
        fontFamily: "montserrat-medium",
        color: colorTextGray,
    },
    btnSubmit: {
        marginVertical: 25
    }
})