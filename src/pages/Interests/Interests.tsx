import * as React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { CitiznBackground } from '../../components/CitiznBackground/CitiznBackground'
import styles from './Interests.styles'
import { navigate } from '../../navigationService'

const data = [
  {
    "id": 1,
    "label": "Law"
  },
  {
    "id": 2,
    "label": "Labor"
  },
  {
    "id": 3,
    "label": "Health Care"
  },
  {
    "id": 4,
    "label": "Education"
  },
  {
    "id": 5,
    "label": "Road Traffic"
  },
  {
    "id": 6,
    "label": "Tourism"
  },
  {
    "id": 7,
    "label": "Citizenship"
  },
]

export type InterestsState = {
  selectedIds: Array<number>
}

export class Component extends React.Component<InterestsState> {
  state = {
    selectedIds: []
  }

  toggleItem = (itemId: number) => {
    const { selectedIds } = this.state
    const index = selectedIds.indexOf(itemId)

    if (index > -1) {
      selectedIds.splice(index, 1)
    } else {
      selectedIds.push(itemId)
    }

    this.setState({ selectedIds })
  }

  render() {
    const { selectedIds } = this.state
    const checkIfItemSelected = (id, isText = false) => {
      if (selectedIds.indexOf(id) > -1) {
        return isText ? styles.btnSelectedText : styles.btnSelected
      }

      return {}
    }

    return (
      <CitiznBackground>
        <SafeAreaView style={styles.container}>
          <View style={{ flex: 1 }}>
            <View style={styles.tagsContainer}>
              {data.map(item => {
                return (
                  <TouchableOpacity key={item.id} style={[styles.btn, checkIfItemSelected(item.id)]} onPress={() => this.toggleItem(item.id)}>
                    <Text style={[styles.text, styles.interestText, checkIfItemSelected(item.id, true)]}>{item.label}</Text>
                  </TouchableOpacity>
                )
              })}
            </View>
          </View>

          <TouchableOpacity style={styles.btnNext} onPress={() => { navigate({ routeName: 'Main' }) }}>
            <Text style={[styles.text, styles.btnNextText]}>Next</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </CitiznBackground>
    )
  }
}

Component.displayName = 'InterestsScreen'

export const InterestsScreen = connect()(Component)
