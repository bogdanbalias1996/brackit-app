import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { FlatList, View, ActivityIndicator } from 'react-native'

import { IGlobalState } from '../../coreTypes'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { HeaderWithCountrySelection } from '../../components/HeaderRounded/HeaderRounded'
import styles from './Parties.styles'
import { getParties } from './actions'
import { receiveParty } from '../Party/actions'
import {
  PartiesScreenProps,
  PartiesScreenStateProps,
  PartiesScreenDispatchProps,
  Party
} from './'
import { PartiesItem } from './PartiesItem'
import { colorLightBlue } from '../../variables'
import { navigate } from '../../navigationService'

const mapStateToProps = (state: IGlobalState): PartiesScreenStateProps => ({
  parties: state.PartiesState.parties,
  isDataLoading: state.PartiesState.isDataLoading
})

const mapDispatchToProps = (dispatch: Dispatch): PartiesScreenDispatchProps => ({
  getParties: () => dispatch(getParties() as any),
  receiveParty: (party) => dispatch(receiveParty(party) as any)
})

export class Component extends React.PureComponent<PartiesScreenProps> {
  static navigationOptions = {
    header: (props) => <HeaderWithCountrySelection {...props} style={{ backgroundColor: colorLightBlue }} />
  }

  state = {
    searchText: ''
  }

  componentDidMount() {
    this.props.getParties()
  }

  onSearch = (searchText: string) => {
    this.setState({ searchText })
  }

  render() {
    const { isDataLoading, parties } = this.props
    const { searchText } = this.state
    const filteredParties = parties.filter((party) => party.name.indexOf(searchText) > -1)

    if (isDataLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={'#58377B'} />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <SearchBar onChangeText={this.onSearch} />
        <View style={styles.listContainer}>
          <FlatList
            data={filteredParties}
            renderItem={({ item }) => (
              <PartiesItem
                party={item}
                onPress={() => {
                  this.props.receiveParty(item)
                  navigate({ routeName: 'Party', params: item })
                }}
              />
            )}
            keyExtractor={(item: Party) => String(item.id)}
          />
        </View>
      </View>
    )
  }
}

export const PartiesScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)