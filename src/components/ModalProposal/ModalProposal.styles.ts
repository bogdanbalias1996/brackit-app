import { StyleSheet } from 'react-native'
import { colorBlack } from '../../variables';

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
  },
  title: {
    fontFamily: 'righteous-regular',
    fontSize: 16,
    color: colorBlack,
    marginVertical: 15,
  },
  info: {
    fontFamily: 'montserrat-medium',
    fontSize: 13,
    color: colorBlack,
    marginBottom: 20,
  },
  wrapButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
})
