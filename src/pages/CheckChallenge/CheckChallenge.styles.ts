import { StyleSheet } from 'react-native'
import { colorBorder, colorTextGray, colorBlack } from '../../variables';

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
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderColor: colorBorder,
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
	title: {
		fontFamily: "montserrat-medium",
		fontSize: 12,
		color: colorTextGray,
		marginBottom: 10,
	},
	text: {
		fontFamily: "montserrat-semibold",
		fontSize: 14,
		color: colorBlack,
	},
	wrapAvatars: {
		flexDirection: 'row',
		paddingLeft: 15,
	},
	avatar: {
		width: 45,
		height: 45,
		borderRadius: 23,
		borderWidth: 2,
		borderColor: 'white',
		marginLeft: -15,
	},
	wrapLocations: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	avatarLocation: {
		width: 40,
		height: 40,
		borderRadius: 10,
		marginRight: 10,
	},
	wrapCoins: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	coinImage: {
		width: 30,
		height: 30,
		marginRight: 10,
	}
})