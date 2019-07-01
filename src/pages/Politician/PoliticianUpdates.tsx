import * as React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { colorDarkGrey, colorCoolGrey, colorBlueberry, colorSilver } from '../../variables'
import { ReactionViewer } from '../../components/ReactionViewer/ReactionViewer'
import { ReactionAdd } from '../../components/ReactionAdd/ReactionAdd'
import { Tags } from '../../components/Tags/Tags'
import { PoliticianUpdate } from './'
import { wrapBoldText } from '../../common/utils/helpers'

export const renderItem = ({ item }) => {
  const {
    tagText,
    tagType,
    quoteText,
    link,
    text,
    reactions
  } = item as PoliticianUpdate

  return (
    <View style={styles.card}>
      <Tags tags={[{ text: tagText, type: tagType }]} />
      <View style={styles.messageContainer}>
        <Text style={styles.text}>{wrapBoldText(text)}</Text>
      </View>

      {
        Boolean(link) && (
          <TouchableOpacity onPress={() => Linking.openURL(link)}>
            <Text style={styles.linkText}>{link}</Text>
          </TouchableOpacity>
        )
      }

      {
        Boolean(quoteText) && (
          <View style={styles.quoteContainer}>
            <Text style={[styles.text, styles.quote]}>{quoteText}</Text>
          </View>
        )
      }

      <Text style={styles.date}>2 month ago</Text>
      <View style={styles.reactionContainer}>
        <ReactionViewer reactions={reactions} />
        <ReactionAdd onSelect={(selectedReaction: string) => { console.log(`Feed selected reaction: ${selectedReaction}`) }} />
      </View>
    </View>
  )
}

export const PoliticianUpdates = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    paddingRight: 8,
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 4
  },
  messageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  text: {
    fontSize: 14
  },
  quoteContainer: {
    borderLeftWidth: 1,
    borderColor: colorSilver,
    paddingLeft: 16,
    marginTop: 10
  },
  quote: {
    fontFamily: 'poppins-italic',
    color: colorDarkGrey,
  },
  linkText: {
    fontSize: 12,
    fontFamily: 'poppins-semi-bold',
    color: colorBlueberry,
    marginTop: 8
  },
  date: {
    fontSize: 12,
    marginTop: 6,
    color: colorCoolGrey,
    fontFamily: 'poppins-medium'
  },
  reactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  }
})