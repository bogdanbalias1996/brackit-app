import * as React from 'react'
import { IGlobalState } from '../../coreTypes'
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { HeaderWithCountrySelection } from '../../components/HeaderRounded/HeaderRounded'
import { colorLightBlue } from '../../variables'
import { getIssues } from './actions'
import { IssuesStateProps, IssuesDispatchProps, IssuesProps, Issue } from './'
import { IssuesItem } from './IssuesItem'
import { navigate } from '../../navigationService'
import { selectIssue } from './actions'
import { HeaderTabs } from './HeaderTabs'

const mapStateToProps = (state: IGlobalState): IssuesStateProps => ({
  issues: state.IssuesState.issues,
  filteredBy: state.IssuesState.filteredBy,
  isDataLoading: state.IssuesState.isDataLoading
})

const mapDispatchToProps = (dispatch): IssuesDispatchProps => ({
  getIssues: () => dispatch(getIssues()),
  selectIssue: (id: string) => dispatch(selectIssue(id))
})

export class Component extends React.PureComponent<IssuesProps> {
  static navigationOptions = {
    header: (props) => (
      <HeaderWithCountrySelection {...props}
        style={{ backgroundColor: colorLightBlue }}
        type="big"
        getInnerComponent={() => <HeaderTabs />}
      />
    )
  }

  componentDidMount() {
    this.props.getIssues()
  }

  render() {
    const { issues, isDataLoading, selectIssue, filteredBy } = this.props

    if (isDataLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={'#58377B'} />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={issues.filter((issue: Issue) => issue.type === filteredBy)}
          renderItem={({ item }) => (
            <IssuesItem
              issue={item}
              onPress={() => {
                selectIssue(item.id)
                navigate({ routeName: 'Issue', params: item })
              }}
            />
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    )
  }
}

export const IssuesScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: colorLightBlue
  }
})