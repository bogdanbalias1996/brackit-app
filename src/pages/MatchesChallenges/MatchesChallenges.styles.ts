import { StyleSheet } from 'react-native'
import { colorShadow, colorOrangeText, colorBlack, colorTextGray, colorBlueStart } from '../../variables';

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
	wrapItem: {
		flexDirection: "row",
		padding: 15,
		marginBottom: 10,
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
		elevation: 4
	},
	itemLeft: {
		flex: 1
	},
	coinWrap: {
		flexDirection: "row"
	},
	coinText: {
		color: colorOrangeText,
		fontSize: 12,
		fontFamily: "montserrat-semibold",
		marginLeft: 5,
	},
	nameText: {
		color: colorBlack,
		fontSize: 14,
		fontFamily: "montserrat-semibold",
		marginVertical: 10,
	},
	smallText: {
		color: colorTextGray,
		fontSize: 12,
		fontFamily: "montserrat-medium",
	},
	itemRight: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	wrapScores: {
		justifyContent: 'center'
	},
	scoreText: {
		fontSize: 12,
		fontFamily: "montserrat-semibold",
		color: colorBlack,
		marginRight: 5,
	},
	wrapVS: {
		width: 24,
		height: 24,
		borderRadius: 12,
		backgroundColor: colorBlueStart,
		borderWidth: 1,
		borderColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: 30
	},
	textVS: {
		fontSize: 10,
		fontFamily: "montserrat-semibold",
		color: 'white',
	},
	wrapAvatars: {
		justifyContent: "space-between",
		position: 'relative',
		alignItems: 'center',
		height: 80
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