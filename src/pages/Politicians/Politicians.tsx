import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { View, ActivityIndicator } from 'react-native'

import { IGlobalState } from '../../coreTypes'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { HeaderWithCountrySelection } from '../../components/HeaderRounded/HeaderRounded'
import styles from './Politicians.styles'
import { getPoliticians, showPoliticianScreen } from './actions'
import { PoliticiansList } from '../Politicians/PoliticiansList'
import {
  PoliticiansScreenProps,
  PoliticiansScreenStateProps,
  PoliticiansScreenDispatchProps,
  Politician
} from './'
import { colorLightBlue } from '../../variables'

const mapStateToProps = (state: IGlobalState): PoliticiansScreenStateProps => ({
  politicians: state.PoliticiansState.politicians,
  isDataLoading: state.PoliticiansState.isDataLoading
})

const mapDispatchToProps = (dispatch: Dispatch): PoliticiansScreenDispatchProps => ({
  getPoliticians: () => dispatch(getPoliticians() as any),
  showPoliticianScreen: (politician: Politician) => dispatch(showPoliticianScreen(politician) as any)
})

export class Component extends React.PureComponent<PoliticiansScreenProps> {
  static navigationOptions = {
    header: (props) => <HeaderWithCountrySelection {...props} style={{ backgroundColor: colorLightBlue }} />
  }

  state = {
    politicians: [],
    searchText: ''
  }

  componentWillReceiveProps(props: PoliticiansScreenProps) {
    const { politicians } = props
    this.setState({ politicians })
  }

  componentDidMount() {
    this.props.getPoliticians()
  }

  onSearch = (searchText: string) => {
    this.setState({ searchText })
  }

  render() {
    const { isDataLoading, politicians, showPoliticianScreen } = this.props
    const { searchText } = this.state
    const filteredPoliticians = politicians.filter((party) => party.name.indexOf(searchText) > -1)

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
          <PoliticiansList
            politicians={filteredPoliticians}
            onItemPress={(politician: Politician) => {
              showPoliticianScreen(politician)
            }}
          />
        </View>
      </View>
    )
  }
}

export const PoliticiansScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)