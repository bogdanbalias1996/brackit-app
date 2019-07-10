import { StyleSheet } from "react-native";
import {
  colorLightBlue,
  colorTextBlue,
  colorBorderBlue
} from "../../variables";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    paddingBottom: 0
  },
  profileTop: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 80
  },
  levelUp: {
    color: colorTextBlue,
    fontSize: 14
  }
});
