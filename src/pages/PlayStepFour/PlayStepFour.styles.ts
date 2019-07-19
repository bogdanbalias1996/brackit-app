import { StyleSheet } from 'react-native'
import { colorTextGray, colorBlack } from '../../variables';

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
	text: {
		fontFamily: "montserrat-medium",
		fontSize: 14,
		color: colorTextGray,
		marginBottom: 25,
		textAlign: 'center'
	},
	dateText: {
		fontFamily: "montserrat-medium",
		fontSize: 22,
		color: colorBlack,
		textAlign: 'center'
	},
	wrapDataContent: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	}
})