import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    top: 0
  },
  content: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    top: 0,
    left: 8,
    right: 8,
    bottom: 14,
    alignItems: 'center'
  },
  header:{
    flexDirection: 'row',
    flex: 1,
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
    minWidth: 20
  },
  rightContainer: {
    minWidth: 20
  }
})