import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  selectedValue: {
    paddingRight: 10
  },
  selectOptionsContainer: {
    position: 'absolute',
    top: '100%',
    zIndex: 20,
    width: '100%'
  },
  option: {
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'white'
  },
  selectedOption: {
    // shadowColor: 'black',
    // shadowOffset: {
    //   width: 0,
    //   height: 3
    // },
    // shadowOpacity: 0.1,
    borderRadius: 5
  },
  preview: {
    width: 25,
    height: 25,
    marginRight: 10
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
