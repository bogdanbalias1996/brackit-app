import { StyleSheet } from "react-native";
import { colorShadow, colorBlueStart } from "../../variables";

export default StyleSheet.create({
  btn: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 20,
    minWidth: 80
  },
  btnShadow: {
    shadowColor: colorShadow,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6
  },
  btnLeft: {
    borderRadius: 0,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0
  },
  btnRight: {
    borderRadius: 0,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0
  },
  btnBorder: {
    borderWidth: 1,
    borderColor: colorBlueStart
  },
  btnGradient: {
    borderRadius: 20,
    minHeight: 36,
    paddingVertical: 5,
    paddingHorizontal: 24,
    minWidth: 80,
    alignItems: "center",
    justifyContent: "center"
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontSize: 10,
    fontFamily: "montserrat-bold",
    letterSpacing: 1
  }
});
