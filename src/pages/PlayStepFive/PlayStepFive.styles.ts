import { StyleSheet } from 'react-native'
import { colorTextGray, colorOrangeText, colorTextBlue } from '../../variables';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		justifyContent: 'space-between',
	},
	headerRightText: {
		fontFamily: "montserrat-semibold",
		fontSize: 12,
		color: "white",
	},
	iconCancel: {
		marginRight: 15
	},
	btnNext: {
		marginBottom: 25
	},
	topContent: {
		padding: 20
	},
	wrapCoinBlock: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15,
	},
	image: {
		width: 40,
		height: 40,
		marginRight: 10,
	},
	wrapCoin: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		fontFamily: "montserrat-medium",
		fontSize: 14,
		color: colorTextGray,
	},
	textOrange: {
		fontFamily: "montserrat-semibold",
		fontSize: 16,
		color: colorOrangeText,
	},
	linkWrap: {
		marginTop: 15,
		flexDirection: 'row',
	},
	icon: {
		width: 20,
		height: 20,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 10,
	},
	iconText: {
		fontFamily: "montserrat-bold",
		fontSize: 14,
		color: 'white',
	},
	linkText: {
		fontFamily: "montserrat-medium",
		fontSize: 14,
		color: colorTextBlue,
	},
	modalCancelStyle: {
		backgroundColor: "white",
		borderRadius: 12,
		paddingVertical: 15
	},
	modalOverlayStyle: {
		backgroundColor: "rgba(0,0,0,0.4)",
		padding: 10,
		paddingTop: 100
	},
	modalCancelTextStyle: {
		color: "#1d7ee2",
		fontWeight: "bold",
		fontSize: 20
	},
	modalOptionContainer: {
		backgroundColor: "white",
		borderRadius: 12,
		paddingHorizontal: 0
	}
})