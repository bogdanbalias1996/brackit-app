import { StyleSheet } from "react-native";
import { colorTextGray, colorBlueEnd, colorTextBlue } from "../../variables";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 14,
    padding: 4,
    backgroundColor: "white"
  },
  item: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    borderRadius: 4,
    position: "relative",
    marginBottom: 10
  },
  itemText: {
    color: colorTextGray,
    fontSize: 14,
    fontFamily: "montserrat-bold"
  },
  itemFirst: {},
  itemLast: {},
  itemSelected: {
    backgroundColor: "transparent"
  },
  itemSelectedText: {
    color: colorTextBlue
  },
  underline: {
    position: "absolute",
    width: "45%",
    height: 2,
    borderRadius: 2,
    bottom: 0,
    left: 9,
    alignItems: "flex-end"
  },
  underlineWhiteDot: {
    position: "absolute",
    right: 2,
    backgroundColor: "white",
    width: 4,
    height: 2
  },
  underlineDot: {
    position: "absolute",
    right: 0,
    backgroundColor: colorBlueEnd,
    width: 2,
    height: 2,
    borderRadius: 2
  }
});
