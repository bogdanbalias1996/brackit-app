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
    fontFamily: "montserrat-medium",
    color: colorTextGray,
    fontSize: 13
  },
  profileHeaderButton: {
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 0 }
  },
  profileMainTrains: {
    paddingVertical: 10,
    fontFamily: "montserrat-medium"
  },
  profileMainHighlighted: {
    color: colorTextBlue,
    fontSize: 14
  },
  profileMainInfo: {
    fontSize: 13,
    lineHeight: 20,
    fontFamily: "montserrat-medium"
  },
  profileStatsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15
  },
  tabsContainer: {
    backgroundColor: "white",
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 5,
    marginBottom: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    flex: 1
  },
  tabsItemText: {
    fontSize: 13
  }
});
