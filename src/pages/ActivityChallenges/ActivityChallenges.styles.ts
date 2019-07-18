import { StyleSheet } from 'react-native'
import { colorBlack, colorBorder, colorTextBlue, colorTextGray } from '../../variables';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white"
	},
	iconCancel: {
		marginRight: 15
	},
	text: {
		fontSize: 14,
		fontFamily: "montserrat-medium",
		color: colorBlack,
	},
	boldText: {
		fontSize: 14,
		fontFamily: "montserrat-semibold",
		color: colorBlack,
	},
	wrapIcon: {
		width: 50,
		height: 50,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colorBorder,
	},
	wrapImageAvatar: {
		position: 'relative'
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	wrapIconSmall: {
		backgroundColor: colorBorder,
		width: 24,
		height: 24,
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		right: 0,
		bottom: -5
	},
	item: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		flexDirection: 'row',
		flex: 1,
		width: '100%',
		borderBottomWidth: 1,
		borderColor: colorBorder,
	},
	itemLeft: {
		marginRight: 15,
	},
	title: {
		marginVertical: 7,
		fontSize: 12,
		fontFamily: "montserrat-semibold",
		color: colorTextBlue,
	},
	date: {
		fontSize: 10,
		fontFamily: "montserrat-medium",
		color: colorTextGray,
	},
	itemRight: {
		width: '100%',
		flexShrink: 1,
	}
})