import { StyleSheet } from 'react-native'
import { colorTextGray, colorBlack, colorEndHeader } from '../../variables'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 14,
    padding: 4,
    backgroundColor: 'white'
  },
  item: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    borderRadius: 4,
    position: 'relative'
  },
  itemText: {
    color: colorTextGray,
    fontSize: 12,
    fontFamily: 'montserrat-bold'
  },
  itemFirst: {},
  itemLast: {},
  itemSelected: {
    backgroundColor: 'transparent',
  },
  itemSelectedText: {
    color: colorBlack
  },
  underline: {
    position: 'absolute',
    width: '45%',
    height: 2,
    borderRadius: 2,
    bottom: 0,
    left: 16,
    alignItems: 'flex-end',
  },
  underlineWhiteDot: {
    position: 'absolute',
    right: 2,
    backgroundColor: 'white',
    width: 4,
    height: 2,
  },
  underlineDot: {
    position: 'absolute',
    right: 0,
    backgroundColor: colorEndHeader,
    width: 2,
    height: 2,
    borderRadius: 2,
  }
})
