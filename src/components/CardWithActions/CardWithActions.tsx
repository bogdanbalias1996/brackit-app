import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from '../../components/Icon/Icon'
import { Tooltip } from 'react-native-elements'
import { ActionItem, CardWithActionsProps } from './'
import { colorDarkGrey } from '../../variables'

export const CardWithActions = ({ children, actionsConfig }: CardWithActionsProps) => {

  const TooltipComponent = () => {
    return (
      <View style={styles.actionItemsContainer}>
        {actionsConfig.map((item: ActionItem, index: number) => {
          return (
            <TouchableOpacity style={styles.actionItem} key={index} onPress={item.action}>
              <Text numberOfLines={1} style={styles.actionItemText}>{item.label}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        {children}
      </View>

      <View>
        <Tooltip
          height={actionsConfig.length * 40 + 16}
          width={196}
          backgroundColor="white"
          containerStyle={styles.tootltip}
          popover={<TooltipComponent />}
          withOverlay={false}
        >
          <Icon name="more" color={'gray'} />
        </Tooltip>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    paddingRight: 8,
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 4,
    flexDirection: 'row'
  },
  cardContent: {
    flex: 1
  },
  actionItemsContainer: {
    flex: 1
  },
  actionItem: {},
  actionItemText: {
    fontSize: 14,
    color: colorDarkGrey,
    padding: 10,
    paddingLeft: 16,
    paddingRight: 24,
    textAlign: 'left'
  },
  tootltip: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.21,
    shadowRadius: 2,

    elevation: 5
  }
})
