import { StyleSheet } from 'react-native'
import { colorOrangeText, colorYellowShadow, colorBlack } from '../../variables';

export default StyleSheet.create({
  modalWrap: {
    flex: 1
  },
  closeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 25,
    marginBottom: 30,
  },
  closeWrapText: {
    fontFamily: 'righteous-regular',
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
  },
  headerCoins: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
    marginBottom: 20,
  },
  headerCoinsContent: {
    marginLeft: 10
  },
  headerCoinsCoins: {
    fontFamily: 'montserrat-bold',
    fontSize: 14,
    color: 'white'
  },
  headerCoinsText: {
    fontFamily: 'montserrat-bold',
    fontSize: 16,
    color: colorOrangeText
  },
  wrapList: {
    flex: 1,
    marginRight: 50,
    shadowColor: colorYellowShadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 6,
    paddingRight: 25,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    marginBottom: 30,
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: colorOrangeText,
    height: 90
  },
  itemLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 30,
    justifyContent: 'space-between',
  },
  itemRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  itemCoinText: {
    fontFamily: 'righteous-regular',
    fontSize: 18,
    color: colorBlack,
  }
})
