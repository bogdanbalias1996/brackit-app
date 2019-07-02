import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'poppins-bold',
    flex: 1,
    textAlign: 'center'
  },
  leftContainer: {
    minWidth: 20,
    flexGrow: 1,
    paddingRight: 20,
  },
  rightContainer: {
    minWidth: 20
  }
})