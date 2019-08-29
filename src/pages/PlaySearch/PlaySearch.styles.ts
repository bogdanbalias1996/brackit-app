import { StyleSheet } from "react-native";
import {
  colorBlack,
  colorTextGray,
  colorBorder,
  colorBlueStart,
  colorShadowGray
} from "../../variables";

export default StyleSheet.create({
  iconCancel: {
    marginRight: 15
  },
  wrapBtnCancel: {
    flexShrink: 1
  },
  btnCancel: {
    fontSize: 16,
    fontFamily: "montserrat-semibold",
    color: "white",
    marginRight: 20
  },
  wrapCustomHeader: {
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 15,
    width: "100%"
  },
  wrapSearch: {
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    position: "relative",
    marginLeft: 20,
    marginRight: 10,
    flexGrow: 1,
    width: "100%",
    maxWidth: "70%"
  },
  icon: {
    position: "absolute",
    left: 5,
    top: 5
  },
  clearBtn: {
    position: "absolute",
    right: 10,
    top: 10
  },
  input: {
    padding: 5,
    paddingLeft: 35,
    paddingRight: 35,
    fontFamily: "montserrat-medium",
    fontSize: 16,
    color: colorTextGray,
    flexGrow: 1
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center"
  },
  wrapTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: colorBorder,
    marginBottom: 10
  },
  activeTab: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colorBlueStart,
    width: 125,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  disActiveTab: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colorBlueStart,
    width: 125,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  activeTabText: {
    fontSize: 13,
    fontFamily: "montserrat-bold",
    color: "white"
  },
  disActiveTabText: {
    fontSize: 13,
    fontFamily: "montserrat-bold",
    color: colorTextGray
  },
  noDataText: {
    fontSize: 16,
    fontFamily: "montserrat-semibold",
    color: colorBlack,
    textAlign: "center"
  },
  title: {
    fontSize: 14,
    fontFamily: "montserrat-semibold",
    color: colorBlack,
    marginBottom: 15,
    marginHorizontal: 25,
    marginTop: 25
  },
  itemWrap: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginRight: 30,
    backgroundColor: "white",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: colorShadowGray,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.6,
    shadowRadius: 7,
    elevation: 6
  },
  itemLeft: {
    flex: 1,
    flexGrow: 1,
    flexDirection: "row",
    paddingRight: 15
  },
  itemRight: {
    flex: 1,
    flexShrink: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10
  },
  wrapItemName: {
    height: 40,
    justifyContent: "center"
  },
  itemName: {
    fontSize: 14,
    fontFamily: "montserrat-semibold",
    color: colorBlack,
    paddingRight: 10
  },
  itemLocation: {
    fontSize: 12,
    fontFamily: "montserrat-medium",
    color: colorTextGray
  }
});
