import { StyleSheet } from 'react-native'
import { colorEndButtonInput } from '../../variables';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	wrapHeaderRight: {
		flexDirection: "row"
	},
	wrapHeaderRightIcon: {
		backgroundColor: colorEndButtonInput,
		borderRadius: 30,
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 10,
		width: 40,
		height: 40
	},
	rateIcon: {
		width: 20,
		height: 20,
	},
})