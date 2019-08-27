import { StyleSheet } from 'react-native'
import { colorTomato, colorBorder, colorBlack, colorTextGray } from '../../variables'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: colorBorder,
  },
  containerWithLabel: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  error: {
    borderBottomWidth: 1,
    borderColor: colorTomato,
  },
  input: {
    flexGrow: 1,
    paddingLeft: 0,
  },
  inputStyle: {
    borderWidth: 0,
    marginTop: 0,
    fontFamily: 'montserrat-medium',
    color: colorBlack,
    fontSize: 16,
    height: 32,
    alignItems: 'center',
    paddingLeft: 0,
  },
  labelStyle: {
    marginTop: 0,
    fontFamily: 'montserrat-semibold',
    color: colorTextGray,
    fontSize: 16,
    alignItems: 'center',
    paddingLeft: 0,
  },
  errorText: {
    backgroundColor: colorTomato,
    paddingHorizontal: 10,
    paddingVertical: 3,
    zIndex: -10,
    fontSize: 15,
    color: 'white',
    fontFamily: 'montserrat-medium',
  },
  labelIconStyle: {
    fontSize: 12,
    fontFamily: "montserrat-medium",
    color: colorTextGray,
    marginBottom: 5,
  }
})
