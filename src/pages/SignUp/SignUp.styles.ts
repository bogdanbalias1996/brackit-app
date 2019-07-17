import { StyleSheet } from 'react-native';
import {
  colorTomato,
  colorLightPeach,
  colorBlack,
  colorTextBlue,
  colorTextGray,
  colorVeryLightBlue,
  colorCoral
} from '../../variables'

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 125
  },
  title: {
    fontFamily: 'righteous-regular',
    color: colorBlack,
    fontSize: 24,
    marginTop: 20,
    letterSpacing: 1
  },
  form: {
    marginTop: 40,
    flexGrow: 0
  },
  btnSubmit: {
    marginTop: 30,
  },
  createAccountContainer: {
    marginTop: 25
  },
  createAccountText: {
    color: colorTextGray,
    fontFamily: 'montserrat-medium',
    fontSize: 14,
    textAlign: 'center'
  },
  createAccountLink: {
    fontFamily: "montserrat-semibold",
    color: colorTextBlue
  },
  socialText: {
    color: colorBlack,
    fontFamily: 'montserrat-medium',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 25,
  },
  socialContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialItem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colorVeryLightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
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
