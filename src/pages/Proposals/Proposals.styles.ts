import { StyleSheet } from 'react-native'
import { colorBlack, colorTextGray } from '../../variables';

export default StyleSheet.create({
    iconCancel: {
        marginRight: 15
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    wrapProposal: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
        paddingLeft: 10,
    },
    wrapProposalContent: {
        paddingLeft: 15,
        paddingBottom: 5,
        width: '100%',
        flex: 1,
        justifyContent: 'center',
    },
    proposalTitle: {
        fontSize: 14,
        fontFamily: "montserrat-semibold",
        color: colorBlack,
    },
    proposalDate: {
        fontSize: 12,
        fontFamily: "montserrat-medium",
        color: colorTextGray,
    }
})