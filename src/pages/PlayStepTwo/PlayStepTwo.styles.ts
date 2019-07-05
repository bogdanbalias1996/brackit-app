import { StyleSheet } from 'react-native'
import { colorBorder, colorBlack, colorTextGray } from '../../variables';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 64
  },
  headerRightText: {
    fontFamily: "montserrat-semibold",
    fontSize: 12,
    color: "white"
  },
  iconCancel: {
    marginRight: 15
  },
  card: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: colorBorder,
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15
  },
  name: {
    fontFamily: "montserrat-semibold",
    fontSize: 16,
    color: colorBlack
  },
  address: {
    fontFamily: "montserrat-medium",
    fontSize: 14,
    color: colorTextGray
  },
  selectAll: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: colorBorder,
    borderTopWidth: 1
  },
  selectAllText: {
    fontFamily: "montserrat-semibold",
    fontSize: 16,
    color: colorBlack,
    textAlign: "center"
  },
})