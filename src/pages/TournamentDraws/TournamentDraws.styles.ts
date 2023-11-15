import { StyleSheet } from 'react-native'
import { colorBorder, colorBlack, colorTextGray } from '../../variables'

export default StyleSheet.create({
	iconCancel: {
		marginRight: 15
	},
	container: {
		flex: 1,
	},
	wrapSlider: {
		height: 80,
	},
	slide: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		height: 80,
		width: '100%',
		backgroundColor: colorBorder
	},
	text: {
		fontSize: 14,
		fontFamily: "montserrat-bold",
		color: colorBlack,
	},
	textDate: {
		fontSize: 14,
		fontFamily: "montserrat-medium",
		color: colorTextGray,
	},
	matchsList: {
		flex: 1,
	}
})