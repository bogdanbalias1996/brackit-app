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
    fontSize: 15
  },
  optionInfo: {
    fontFamily: "montserrat-medium",
    color: colorTextGray,
    fontSize: 12
  },
  wrapSelect: {
    paddingTop: 15,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: colorBorder,
    position: "relative",
    height: 80,
    width: "100%"
  },
  selectLabel: {
    fontFamily: "montserrat-medium",
    color: colorTextGray,
    fontSize: 12,
    width: "85%"
  },
  selectTextStyle: {
    textAlign: "left",
    fontFamily: "montserrat-medium",
    color: colorBlack,
    fontSize: 16,
    lineHeight: 16
  },
  selectStyle: {
    borderWidth: 0,
    padding: 0,
    height: 70,
    width: "100%",
    justifyContent: "flex-end"
  },
  wrapSelectTitle: {
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    top: 15,
    left: 20,
    right: 0,
    zIndex: -1
  },
  wrapModalSelect: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
    width: "100%",
    paddingLeft: 20,
    height: 70,
    justifyContent: "flex-end"
  }
});
