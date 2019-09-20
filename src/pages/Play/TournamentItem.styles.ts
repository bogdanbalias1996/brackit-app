import { StyleSheet } from "react-native";
import {
  colorShadowGray,
  colorBlack,
  colorTextGray,
  colorOrangeText,
  colorGradientBlue
} from "../../variables";

export default StyleSheet.create({
  card: {
    padding: 15,
    paddingTop: 0,
    paddingLeft: 25,
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
    elevation: 6,
    position: "relative"
  },
  triangleShape: {
    width: 0,
    height: 0,
    borderLeftWidth: 38,
    borderRightWidth: 0,
    borderBottomWidth: 38,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    position: "absolute",
    top: 0,
    left: 0
  },
  wrapTopContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  wrapEntries: {
    flexDirection: "row"
  },
  entry: {
    flexDirection: "row",
    marginLeft: 15,
    alignItems: "center"
  },
  entryText: {
    fontSize: 10,
    fontFamily: "montserrat-medium",
    color: colorBlack,
    marginLeft: 5
  },
  status: {
    fontSize: 10,
    fontFamily: "montserrat-bold",
    color: "#00BCD4"
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: "montserrat-semibold",
    color: colorBlack,
    marginBottom: 5
  },
  cardSubTitle: {
    fontSize: 10,
    fontFamily: "montserrat-medium",
    color: colorBlack
  },
  questionItem: {
    marginVertical: 5,
    paddingLeft: 25,
    position: "relative",
    paddingRight: 15
  },
  eventsItem: {
    marginVertical: 5,
    paddingRight: 15
  },
  questionIcon: {
    position: "absolute",
    top: 0,
    left: 0
  },
  qestionText: {
    fontSize: 12,
    fontFamily: "montserrat-medium",
    color: colorTextGray
  },
  answerText: {
    fontSize: 13,
    fontFamily: "montserrat-medium",
    color: colorBlack
  },
  prizeText: {
    fontFamily: "montserrat-semibold",
    fontSize: 14,
    color: colorOrangeText
  },
  entryFeeText: {
    fontFamily: "montserrat-semibold",
    fontSize: 14,
    color: colorGradientBlue
  },
  questionItemContent: {
    flexDirection: "row",
    alignItems: "center"
  },
  itemIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
    marginTop: 2
  },
  categoriesWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5
  },
  categoryItem: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colorGradientBlue,
    marginRight: 5,
    marginBottom: 5
  },
  categoryItemText: {
    fontSize: 10,
    fontFamily: "montserrat-bold",
    color: colorBlack
  }
});
