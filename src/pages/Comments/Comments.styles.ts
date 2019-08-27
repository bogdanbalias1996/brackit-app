import { StyleSheet } from "react-native";
import {
  colorShadow,
  colorBlack,
  colorTextGray,
  colorVeryLightBlue,
  colorBorder,
  colorTextBlue
} from "../../variables";

export default StyleSheet.create({
  iconCancel: {
    marginRight: 15
  },
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  card: {
    paddingVertical: 15,
    marginVertical: 20,
    marginRight: 30,
    backgroundColor: "white",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: colorShadow,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8
  },
  questionItem: {
    marginVertical: 5,
    paddingLeft: 45,
    position: "relative",
    paddingRight: 15
  },
  questionIcon: {
    position: "absolute",
    top: 0,
    left: 20
  },
  answerText: {
    fontSize: 13,
    fontFamily: "montserrat-medium",
    color: colorBlack
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: "montserrat-semibold",
    color: colorBlack
  },
  proposalsText: {
    fontSize: 14,
    fontFamily: "montserrat-medium",
    color: colorTextGray,
    width: "100%",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20
  },
  input: {
    marginVertical: 20,
    backgroundColor: colorVeryLightBlue,
    borderRadius: 20,
    height: 40,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 60,
    position: "relative"
  },
  inputText: {
    fontFamily: "montserrat-medium",
    color: colorTextGray,
    fontSize: 12,
    width: "100%"
  },
  inputWrap: {
    borderTopWidth: 1,
    borderColor: colorBorder,
    paddingHorizontal: 16
  },
  wrapPostBtn: {
    marginRight: 10,
    position: "absolute",
    top: 12,
    right: 15
  },
  postBtnText: {
    fontFamily: "montserrat-semibold",
    color: colorTextBlue,
    fontSize: 14
  }
});
