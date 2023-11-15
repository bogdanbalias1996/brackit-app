import { StyleSheet } from 'react-native'
import { colorTextBlue, colorBlack } from '../../variables';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white"
	},
	iconCancel: {
		marginRight: 15
	},
	btnNext: {
		marginVertical: 25
	},
	wrapSmileBtn: {
		marginVertical: 25,
		flexDirection: 'row',
		paddingHorizontal: 20,
		alignItems: 'center',
	},
	smileBtnText: {
		fontSize: 18,
		fontFamily: "montserrat-medium",
		color: colorTextBlue,
		marginRight: 15,
	},
	textInput: {
		paddingHorizontal: 20,
		fontSize: 14,
		fontFamily: "montserrat-medium",
		color: colorBlack,
		textAlignVertical: 'top'
	}
})