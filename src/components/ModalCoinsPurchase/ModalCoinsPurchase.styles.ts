import { StyleSheet } from 'react-native'
import { colorOrangeText, colorYellowShadow, colorBlack, colorBrown } from '../../variables';

export default StyleSheet.create({
  modalWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapListShadow: {
    shadowColor: colorYellowShadow,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 6,
    marginBottom: 80,
    marginRight: 50,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  wrapList: {
    paddingRight: 25,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    paddingVertical: 25,
    alignItems: 'center',
  },
  wrapCoins: {
    justifyContent: 'center'
  },
  wrapCoinsText: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5,
  },
  coinsText: {
    fontFamily: 'montserrat-semibold',
    fontSize: 14,
    color: colorBrown
  },
  wrapImage: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purchaseText: {
    fontFamily: 'righteous-regular',
    fontSize: 16,
    color: colorOrangeText,
    marginVertical: 15,
  }
})
