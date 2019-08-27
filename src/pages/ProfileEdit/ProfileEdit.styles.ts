import { StyleSheet } from "react-native";
import { colorBlack, colorBorder, colorTextGray } from "../../variables";

export default StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  iconCancel: {
    marginRight: 15
  },
  headerRightText: {
    fontFamily: "montserrat-semibold",
    fontSize: 12,
    color: "white"
  },
  btnNext: {
    marginVertical: 25
  },
  wrapTitle: {
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: colorBorder
  },
  title: {
    fontFamily: "montserrat-medium",
    fontSize: 16,
    color: colorBlack,
    marginTop: 40,
    marginBottom: 20
  },
  modalCancelStyle: {
    backgroundColor: "white",
    borderRadius: 12,
    paddingVertical: 15
  },
  modalOverlayStyle: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 10,
    paddingTop: 300,
    justifyContent: "flex-end"
  },
  modalCancelTextStyle: {
    color: "#1d7ee2",
    fontFamily: "montserrat-bold",
    fontSize: 20
  },
  modalOptionContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 0
  },
  modalOptionTextStyle: {
    fontFamily: "montserrat-medium",
    color: colorBlack,
    fontSize: 20
  },
  optionLabel: {
    fontFamily: "montserrat-medium",
    color: colorBlack,
    fontSize: 20
  },
  optionInfo: {
    fontFamily: "montserrat-medium",
    color: colorTextGray,
    fontSize: 14
  },
  wrapSelect: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: colorBorder
  },
  selectLabel: {
    fontFamily: "montserrat-semibold",
    color: colorTextGray,
    fontSize: 14
  },
  selectTextStyle: {
    textAlign: "left",
    fontFamily: "montserrat-medium",
    color: colorTextGray,
    fontSize: 14
  },
  selectStyle: {
    borderWidth: 0,
    padding: 0
  }
});
