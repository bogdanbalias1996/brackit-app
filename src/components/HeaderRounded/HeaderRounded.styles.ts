import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'righteous-regular',
    textAlign: 'center'
  },
  leftContainer: {
    minWidth: 20,
    paddingRight: 5,
    flexDirection: 'row',
  },
  rightContainer: {
    minWidth: 20,
  },
  back: {
    marginRight: 15
  }
})