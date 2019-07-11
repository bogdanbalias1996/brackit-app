import { StyleSheet } from "react-native";
import { colorTextGray } from "../../variables";

export default StyleSheet.create({
  avatarWrap: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  avatarStatus: {
    fontFamily: "montserrat-semibold",
    fontSize: 8,
    color: colorTextGray,
    textAlign: "center",
    marginTop: 5
  },
  avatarRate: {
    position: "absolute",
    bottom: 10,
    width: 40,
    height: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white"
  },
  avatarRateText: {
    fontFamily: "montserrat-semibold",
    fontSize: 10,
    color: "white"
  }
});
