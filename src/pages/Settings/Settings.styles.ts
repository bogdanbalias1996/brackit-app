import { StyleSheet } from "react-native";
import { colorTextGray, colorBorder } from "../../variables";

export default StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  iconCancel: {
    marginRight: 15
  },
  listItemGroup: {
    marginBottom: 32
  },
  listItem: {
    padding: 16,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: colorBorder
  },
  listItemText: {
    color: colorTextGray,
    fontSize: 14,
    fontFamily: "montserrat-medium"
  },
  signOutText: {
    fontSize: 12,
    color: colorTextGray,
    fontFamily: "montserrat-semibold"
  }
});
