import { StyleSheet } from 'react-native'
import { colorBlueberry, colorBlueyGrey } from '../../variables'

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
    borderRadius: 4
  },
  itemText: {
    color: colorBlueyGrey,
    fontSize: 12,
    fontFamily: 'poppins'
  },
  itemFirst: {},
  itemLast: {},
  itemSelected: {
    backgroundColor: colorBlueberry,
  },
  itemSelectedText: {
    color: 'white'
  }
})
