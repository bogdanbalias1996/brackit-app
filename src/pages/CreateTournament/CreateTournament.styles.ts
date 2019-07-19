import { StyleSheet } from 'react-native'
import { colorTextGray, colorGradientBlue, colorBlack, colorBorder } from '../../variables';

export default StyleSheet.create({
	container: {
		backgroundColor: "white"
	},
	iconCancel: {
		marginRight: 15
	},
	headerRightText: {
		fontFamily: "montserrat-semibold",
		fontSize: 12,
		color: "white"
	},
	btnNext: {
		marginVertical: 30
	},
	eventsItem: {
		paddingVertical: 15,
		paddingRight: 15,
		borderBottomWidth: 1,
		borderColor: colorBorder,
	},
	labelText: {
		fontSize: 12,
		fontFamily: "montserrat-medium",
		color: colorTextGray,
		paddingHorizontal: 20,
		marginBottom: 5,
	},
	eventsWrap: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 5,
		paddingHorizontal: 20,
	},
	eventItem: {
		paddingVertical: 5,
		paddingHorizontal: 15,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: colorGradientBlue,
		marginRight: 5,
		marginBottom: 5
	},
	eventItemText: {
		fontSize: 10,
		fontFamily: "montserrat-bold",
		color: colorBlack
	}
})