import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Emoji from 'react-native-emoji'
import { colorCoolGrey } from '../../variables'
import { Tooltip } from 'react-native-elements'
import { ReactionBar } from '../ReactionBar/ReactionBar'

const getIconByReaction = (reaction: string) => {
  switch (reaction) {
    case 'thinking':
      return 'thinking_face'
    case 'thumbUp':
      return '+1'
    case 'thumbDown':
      return '-1'
    default:
      return reaction
  }
}

export const ReactionViewer = ({
  reactions = {}
}) => {
  const reactionsList = Object.keys(reactions).length ? Object.keys(reactions) : ['rage', 'thinking', 'blush']
  const reactionsSorted = reactionsList.sort((a, b) => reactions[a] - reactions[b]).reverse().slice(0, 3)
  const totalCount = reactionsList.reduce((accum, key) => accum += reactions[key] || 0, 0)

  return (
    <Tooltip
      height={50}
      width={343}
      backgroundColor="white"
      containerStyle={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.21,
        shadowRadius: 2,

        elevation: 5
      }}
      popover={(
        <ReactionBar
          style={{ marginTop: 0 }}
          stylesReactionItem={{
            marginRight: 4,
            marginLeft: 4,
            paddingLeft: 4,
            paddingRight: 4
          }}
          {...reactions}
          onSelect={() => { }}
        />
      )}
      withOverlay={false}
    >
      <View style={styles.container}>
        {reactionsSorted.map((reaction: string, index: number) => {
          return <Emoji key={index} name={getIconByReaction(reaction)} style={styles.emoji} />
        })}
        <Text style={styles.counterText}>{totalCount}</Text>
      </View>
    </Tooltip>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  emoji: {
    fontSize: 18,
    marginRight: 4
  },
  counterText: {
    fontSize: 12,
    fontFamily: 'poppins-medium',
    color: colorCoolGrey,
    marginLeft: 4
  }
})