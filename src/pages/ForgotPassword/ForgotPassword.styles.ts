import { StyleSheet } from 'react-native'
import { colorBlack, colorTextBlue, colorTextGray, colorCoral } from '../../variables'

export default StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  logo: {
    width: 125
  },
  title: {
    fontFamily: 'righteous-regular',
    color: colorBlack,
    textAlign: 'center',
    fontSize: 24,
    marginTop: 20,
    letterSpacing: 1
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: colorBlack,
    textAlign: 'center',
    marginTop: 25,
    marginHorizontal: 20,
    fontFamily: 'montserrat-medium',
  },
  form: {
    marginTop: 25
  },
  btnSubmit: {
    marginTop: 60
  },
  createAccountContainer: {
    marginTop: 70
  },
  createAccountText: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: "montserrat-medium",
    color: colorTextGray
  },
  resetText: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    fontFamily: "montserrat-medium",
    color: colorTextGray,
    marginHorizontal: 20,
  },
  createAccountLink: {
    fontFamily: "montserrat-semibold",
    color: colorTextBlue
  },
  formErrorContainer: {
    backgroundColor: colorCoral,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  formError: {
    color: 'white',
    textAlign: 'center',
    padding: 5,
    fontSize: 14
  },
})
