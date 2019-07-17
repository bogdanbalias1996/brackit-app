import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colorBlueberry, colorWhite2 } from '../../variables'
import { Icon } from '../../components/Icon/Icon'
import { Tooltip } from 'react-native-elements'
import { ReactionBar } from '../ReactionBar/ReactionBar'

export type ReactionAddProps = {
  onSelect: (selectedReaction: string) => void
}

export const ReactionAdd = ({
  onSelect = () => { }
}: ReactionAddProps) => {
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
            marginLeft: 4
          }}
          hideText={true}
          onSelect={onSelect}
        />
      )}
      withOverlay={false}
    >
      <View style={styles.container}>
        <Icon name="emoji" color={colorBlueberry} />
        <Text style={styles.text}>React</Text>
      </View>
    </Tooltip>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colorWhite2,
    borderRadius: 4,
    padding: 7,
    paddingLeft: 12,
    paddingRight: 12
  },
  text: {
    color: colorBlueberry,
    fontSize: 12,
    fontFamily: 'poppins-semi-bold'
  }
})