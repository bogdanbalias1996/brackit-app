import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from '../../components/Icon/Icon'
import { CardWithLongTextProps } from './'
import { colorDarkGrey, colorBlueberry, colorLightBlue } from '../../variables'
import ViewMoreText from 'react-native-view-more-text'

const ButtonToggle = ({ onPress, text, iconName }) => (
  <TouchableOpacity onPress={onPress} style={styles.btnToggle}>
    <Text style={styles.btnToggleText}>{text}</Text>
    <Icon name={iconName} color={colorBlueberry} />
  </TouchableOpacity>
)

export const CardWithLongText = ({ title, text, numberOfLines = 3 }: CardWithLongTextProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <ViewMoreText
        numberOfLines={numberOfLines}
        renderViewMore={(onPress) => <ButtonToggle onPress={onPress} iconName="down" text="Read More" />}
        renderViewLess={(onPress) => <ButtonToggle onPress={onPress} iconName="up" text="Read Less" />}
        textStyle={styles.cardText}
      >
        <Text>{text}</Text>
      </ViewMoreText>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: 'white',
  },
  title: {
    color: colorBlueberry,
    fontSize: 12,
    fontFamily: 'poppins-semi-bold',
    marginRight: 10,
    lineHeight: 18
  },
  text: {},
  btnToggle: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  btnToggleText: {
    fontFamily: 'poppins-semi-bold',
    color: colorBlueberry
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'poppins-semi-bold',
    color: colorDarkGrey
  },
  cardText: {
    fontSize: 14,
    fontFamily: 'poppins-medium',
    color: colorDarkGrey
  }
})
