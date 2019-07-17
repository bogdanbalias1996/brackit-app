import { StyleSheet } from 'react-native'
import {
  colorBlack,
  colorTextGray,
  colorGradientBlue,
  colorDotGray
} from '../../variables'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  },
  imageContainer: {
    height: 300,
    width: '100%',
    marginBottom: 40,
    marginTop: 30,
  },
  paginationStyle: {
    height: 155,
    left: 24,
    right: 24,
    bottom: -100
  },
  buttonStyle: {
    marginTop: 20,
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  title: {
    fontSize: 36,
    fontFamily: 'righteous-regular',
    color: colorBlack,
    marginBottom: 15
  },
  description: {
    fontFamily: 'montserrat-medium',
    color: colorTextGray,
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 20,
    textAlign: 'center'
  },
  dotStyle: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colorDotGray,
  },
  activeDotStyle: {
    width: 24,
    height: 4,
    borderRadius: 2,
    backgroundColor: colorGradientBlue,
  }
})