import { Dimensions, PixelRatio } from 'react-native'

export const widthPercentageToDP = (widthPercent: string) => {
  const screenWidth = Dimensions.get('window').width
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent)

  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100)
}

export const heightPercentageToDP = (heightPercent: string) => {
  const screenHeight = Dimensions.get('window').height
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent)

  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100)
}
