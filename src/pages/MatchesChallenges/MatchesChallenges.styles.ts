import { StyleSheet } from 'react-native'
import {
	colorShadow,
	colorOrangeText,
	colorBlack,
	colorTextGray,
	colorVeryLightBlue,
	colorGreen,
	colorBlueEnd
} from '../../variables';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white"
	},
	iconCancel: {
		marginRight: 15
	},
	calendar: {
		shadowColor: colorBlack,
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.2,
		shadowRadius: 5,
		elevation: 4,
		marginBottom: 20,
	},
	card: {
		paddingVertical: 15,
		marginVertical: 10,
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
	headerCard: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingLeft: 20,
		paddingRight: 15,
		marginBottom: 20
	},
	headerCardRate: {
		position: "relative",
		marginLeft: 20,
		flexDirection: "row",
		alignItems: "flex-start",
		marginTop: 5
	},
	headerCardRateText: {
		fontFamily: "montserrat-semibold",
		fontSize: 14,
		color: colorOrangeText,
		marginLeft: 5
	},
	footerCard: {
		flexDirection: "row",
		justifyContent: "flex-end",
		marginTop: 10,
		paddingRight: 15
	},
	wrapIcon: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 10
	},
	icon: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: colorVeryLightBlue,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 5
	},
	iconText: {
		fontSize: 12,
		fontFamily: "montserrat-medium",
		color: colorTextGray
	},
	statusCard: {
		fontSize: 10,
		fontFamily: "montserrat-bold",
		color: colorGreen
	},
	titleCard: {
		fontSize: 15,
		fontFamily: "montserrat-semibold",
		color: colorBlack
	},
	wrapCategory: {
		borderRadius: 20,
		paddingVertical: 2,
		paddingHorizontal: 7,
		backgroundColor: colorBlueEnd,
		marginRight: 10,
		justifyContent: "center",
		alignItems: "center"
	},
	categoryText: {
		fontSize: 12,
		fontFamily: "montserrat-bold",
		color: "white"
	},
	infoText: {
		fontSize: 12,
		fontFamily: "montserrat-medium",
		color: colorTextGray
	},
	noDataText: {
		fontSize: 14,
		fontFamily: "montserrat-medium",
		color: colorTextGray,
		width: '100%',
		textAlign: 'center',
		marginTop: 15,
	}
})