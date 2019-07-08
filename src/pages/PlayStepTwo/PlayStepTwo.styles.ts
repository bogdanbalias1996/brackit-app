import { StyleSheet } from 'react-native'
import { colorBorder, colorBlack, colorTextGray, colorEndHeader } from '../../variables';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 15,
    paddingBottom: 70,
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
    color: colorEndHeader,
    textAlign: "center"
  },
  clickableItem: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  text: {
    fontFamily: "montserrat-medium",
    fontSize: 13,
    color: colorTextGray
  },
  title: {
    fontFamily: "montserrat-bold",
    fontSize: 14,
    color: colorTextGray
  },
  switchWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarWrap: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  checkIcon: {
    position: 'absolute'
  },
  btnNext: {
    position: "absolute",
    bottom: 15
  }
})