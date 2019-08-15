import { StyleSheet } from 'react-native'
import { colorBlack, colorShadow } from '../../variables';

export default StyleSheet.create({
  modalWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapContent: {
    paddingLeft: 25,
    paddingRight: 25,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    paddingVertical: 25,
    marginRight: 30,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'righteous-regular',
    fontSize: 16,
    color: colorBlack,
    marginVertical: 15,
  },
  wrapIcon: {
    borderRadius: 25,
    height: 50,
    width: 50,
    shadowColor: colorShadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
