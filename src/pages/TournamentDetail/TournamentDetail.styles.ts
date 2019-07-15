import { StyleSheet } from "react-native";
import { colorTextGray, colorBlack } from "../../variables";

export default StyleSheet.create({
  iconCancel: {
    marginRight: 15
  },
  tournamentContent: {
    backgroundColor: "white",
    padding: 20,
    elevation: 5
  },
  status: {
    fontSize: 10,
    fontFamily: "montserrat-bold",
    color: colorBlack,
    marginBottom: 5
  },
  title: {
    fontSize: 16,
    fontFamily: "montserrat-semibold",
    color: colorBlack,
  },
  textItem: {
    marginVertical: 5,
    paddingLeft: 25,
    position: "relative",
    paddingRight: 15
  },
  textIcon: {
    position: "absolute",
    top: 0,
    left: 0
  },
  text: {
    fontSize: 13,
    fontFamily: "montserrat-medium",
    color: colorTextGray,
  },
  tabsContainer: {
    backgroundColor: "white",
    paddingTop: 0,
    marginTop: 0,
    paddingBottom: 20,
    marginBottom: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5
  },
  tabsItemText: {
    fontSize: 13
  }
});
