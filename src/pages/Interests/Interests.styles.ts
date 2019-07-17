import { StyleSheet } from 'react-native'
import { colorBlueberry } from '../../variables'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 100
  },
  tagsContainer: {
    flexDirection:'row',
    flexWrap:'wrap'
  },
  btn: {
    backgroundColor: 'white',
    marginRight: 16,
    marginBottom: 16,
    padding: 11,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 4
  },
  btnSelected: {
    backgroundColor: 'rgba(255, 255, 255, .2)',
  },
  btnSelectedText: {
    color: 'white'
  },
  text: {
    fontFamily: 'poppins-bold',
  },
  interestText: {
    color: colorBlueberry
  },
  btnText: {
    fontSize: 12,
    color: colorBlueberry
  },
  btnNext: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingTop: 13,
    paddingBottom: 13
  },
  btnNextText: {
    fontSize: 16,
    color: colorBlueberry
  }
})