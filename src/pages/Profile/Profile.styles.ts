import { StyleSheet } from "react-native";
import { colorTextBlue, colorTextGray } from "../../variables";

export default StyleSheet.create({
  profileWrapper: {
    backgroundColor: "white",
    paddingTop: 25,
    padding: 20,
    paddingBottom: 0
  },
  profileHeaderWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  profileHeader: {
    flexDirection: "row"
  },
  profileHeaderInfoWrapper: {
    paddingHorizontal: 15
  },
  profileHeaderInfo: {
    flexDirection: "row",
    alignItems: "baseline"
  },
  profileHeaderInfoName: {
    fontFamily: "montserrat-semibold",
    fontSize: 18,
    marginRight: 5
  },
  profileHeaderInfoLocation: {
    paddingVertical: 4
  },
  profileHeaderInfoText: {
    color: colorTextGray,
    fontSize: 13
  },
  profileHeaderButton: {
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 0 }
  },
  profileMainTrains: {
    paddingVertical: 15,
    fontFamily: "montserrat-medium"
  },
  profileMainHighlighted: {
    color: colorTextBlue,
    fontSize: 14
  },
  profileMainInfo: {
    lineHeight: 21,
    fontFamily: "montserrat-medium"
  },
  profileStatsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20
  },
  tabsContainer: {
    backgroundColor: "white",
    marginTop: 10,
    paddingTop: 0,
    paddingBottom: 20,
    marginBottom: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10
    },
    justifyContent: "center",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5
  },
  tabsItemText: {
    fontSize: 13
  }
});
