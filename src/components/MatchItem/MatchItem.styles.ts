import { StyleSheet } from 'react-native'
import { colorShadow, colorBorder, colorGreen, colorBlack } from '../../variables';

export default StyleSheet.create({
  matchWrap: {
    marginRight: 20,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: colorShadow,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 4
  },
  winnerItem: {
    paddingHorizontal: 20,
    paddingLeft: 15,
    borderColor: colorBorder,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    position: "relative",
    backgroundColor: "white"
  },
  winnerItemContentWrap: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5
  },
  winnerSign: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: 5,
    backgroundColor: colorGreen
  },
  winnerItemContent: {
    marginLeft: 15
  },
  winnerItemTitle: {
    fontSize: 14,
    fontFamily: "montserrat-semibold",
    color: colorBlack,
  },
  scoresWrap: {
    flexDirection: "row",
    position: "absolute",
    right: 20
  },
  winnerScore: {
    fontSize: 12,
    fontFamily: "montserrat-semibold",
    color: colorBlack,
    marginLeft: 5,
    width: 20,
    textAlign: "center"
  }
})
