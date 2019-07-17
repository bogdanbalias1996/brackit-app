import * as React from 'react'
import { IGlobalState } from '../../coreTypes'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { Svg, Constants } from 'expo'
import { Icon } from '../../components/Icon/Icon'
import styles from './HeaderRounded.styles'
import { goBack } from '../../navigationService'
import { navigate } from '../../navigationService'
import Flag from 'react-native-flags'
import { connect } from 'react-redux'

const { width, height } = Dimensions.get('window')
const calculateAspectRatioFit = (srcWidth, srcHeight, maxWidth, maxHeight) => {
  const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight)

  return { width: srcWidth * ratio, height: srcHeight * ratio };
}

export const HeaderRounded = (props) => {
  const { Defs, LinearGradient, Stop, Path } = Svg
  const {
    navigation,
    title,
    style,
    type = 'normal',
    getLeftComponent = null,
    getInnerComponent = () => null,
    getRightComponent = () => null
  } = props
  const headerHeight = type == 'normal' ? 74 : 106
  const viewBox = type == 'normal' ? '0 0 375 74' : '0 0 375 106'
  const { width: svgWidth, height: svgHeight } = calculateAspectRatioFit(375, headerHeight, width + width * 0.15, height + height * 0.15)
  const { routeName } = navigation.state

  return (
    <View style={[styles.container, style || {}]}>
      <View>
        <View style={{ height: Constants.statusBarHeight, backgroundColor: '#403474' }} />
        <Svg style={{
          width: svgWidth,
          height: svgHeight,
          marginTop: -1
        }} viewBox={viewBox}>
          <Defs>
            <LinearGradient id="a" x1="50%" x2="50%" y1="0%" y2="94.332%">
              <Stop offset="0%" stopColor="#403474" />
              <Stop offset="100%" stopColor="#873C89" />
            </LinearGradient>
          </Defs>
          <Path
            fill="url(#a)"
            d={
              type == 'normal'
                ? "M0 0h375v64c-62.5 6.667-125 10-187.5 10S62.5 70.667 0 64V0z"
                : "M0 0h375v96c-62.5 6.667-125 10-187.5 10S62.5 102.667 0 96V0z"
            }
          />
        </Svg>
      </View>
      <View style={[styles.content, { top: Constants.statusBarHeight }]}>

        <View style={styles.header}>
          <View style={styles.leftContainer}>

            {getLeftComponent === null && navigation.state.routes.length > 1 && (
              <TouchableOpacity onPress={goBack}>
                <Icon size={25} name={'back'} color={'white'} />
              </TouchableOpacity>
            )}
            {!!getLeftComponent && getLeftComponent()}
          </View>

          <Text style={styles.title}>{title || routeName}</Text>
          <View style={styles.rightContainer}>
            {getRightComponent()}
          </View>
        </View>

        {getInnerComponent()}
      </View>
    </View >
  )
}

const Header = (props) => (
  <HeaderRounded
    {...props}
    getRightComponent={() => (
      <TouchableOpacity onPress={() => navigate({ routeName: 'CountrySelection' })}>
        <Flag
          code={props.selectedCountryCode}
          size={24}
          type="flat"
        />
      </TouchableOpacity>
    )}
  />
)

export const HeaderWithCountrySelection = connect(
  (state: IGlobalState) => ({
    selectedCountryCode: state.LoginState.selectedCountryCode || state.LoginState.countries[0].code
  })
)(Header)