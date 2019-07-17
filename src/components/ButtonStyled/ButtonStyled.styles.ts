import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  btn: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: "#4d69ff",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
  },
  btnGradient: {
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 10,
    fontFamily: 'montserrat-bold',
    letterSpacing: 1
  },
})
