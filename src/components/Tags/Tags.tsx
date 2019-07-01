import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {
  colorIceBlueTwo,
  colorLightBlue2,
  colorVeryLightPink,
  colorCoral,
  colorDuckEggBlue,
  colorFreshGreen,
  colorSeafoamBlue,
  colorIce,
  colorPale,
  colorSandyBrown,
  colorPale2,
  colorMacaroniAndCheese,
  colorPaleLavender,
  colorPalePurple,
  colorWhite2,
  colorCoolGrey
} from '../../variables'
import { Tag, TagsProps, TagPresetTypes } from './'

const getTagPresetByType = (type: string): TagPresetTypes => {
  switch (type) {
    case 'type1': // Posted on Twitter
      return {
        textColor: colorLightBlue2,
        bgColor: colorIceBlueTwo
      }
    case 'type2': // Voted No
      return {
        textColor: colorCoral,
        bgColor: colorVeryLightPink
      }
    case 'type3': // Voted Yes
      return {
        textColor: colorFreshGreen,
        bgColor: colorDuckEggBlue
      }
    case 'type4':
      return {
        textColor: colorSeafoamBlue,
        bgColor: colorIce
      }
    case 'type5':
      return {
        textColor: colorSandyBrown,
        bgColor: colorPale
      }
    case 'type6':
      return {
        textColor: colorMacaroniAndCheese,
        bgColor: colorPale2
      }
    case 'type7':
      return {
        textColor: colorPalePurple,
        bgColor: colorPaleLavender
      }
    case 'type8':
      return {
        textColor: colorCoolGrey,
        bgColor: colorWhite2
      }
    default:
      console.error(`Unsupported tag type: "${type}"`)
      return {
        textColor: colorLightBlue2,
        bgColor: colorIceBlueTwo
      }
  }
}

export const Tags = ({
  tags,
  containerStyle = {},
  tagStyle = {}
}: TagsProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {tags.map((tag, index) => {
        const { type, text } = tag
        const { textColor, bgColor } = getTagPresetByType(type)

        return (
          <TouchableOpacity style={[styles.tag, tagStyle, { backgroundColor: bgColor }]} key={index}>
            <Text style={[styles.tagText, { color: textColor }]}>{text}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  tag: {
    borderRadius: 20,
    padding: 12,
    paddingTop: 4,
    paddingBottom: 4,
    marginRight: 8,
    marginBottom: 8
  },
  tagText: {
    fontSize: 12,
    fontFamily: 'poppins-medium'
  }
})
