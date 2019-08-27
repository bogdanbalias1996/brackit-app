import { StyleSheet } from "react-native";
import { colorTextGray, colorBlack, colorVeryLightBlue } from "../../variables";

export default StyleSheet.create({
  wrapProposal: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "flex-start",
    marginLeft: 10
  },
  wrapProposalContent: {
    backgroundColor: colorVeryLightBlue,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    paddingLeft: 15,
    paddingBottom: 5,
    width: "100%",
    flex: 1
  },
  proposalTitle: {
    fontSize: 14,
    fontFamily: "montserrat-semibold",
    color: colorBlack,
    marginVertical: 15
  },
  proposalComment: {
    fontSize: 14,
    fontFamily: "montserrat-medium",
    color: colorBlack
  },
  wrapBottomProposal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  proposalDate: {
    marginTop: 15,
    marginBottom: 10,
    fontSize: 12,
    fontFamily: "montserrat-medium",
    color: colorTextGray
  }
});
