import * as React from 'react'
import { IGlobalState } from '../../coreTypes'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { SafeAreaView, ScrollView } from 'react-navigation'
import { HeaderRounded } from '../../components/HeaderRounded/HeaderRounded'
import get from 'lodash.get'
import { Issue } from '../Issues'
import {
  colorLightBlue,
  colorCoolGrey,
  colorDarkGrey
} from '../../variables'
import { Tags } from '../../components/Tags/Tags'
import { CardWithLongText } from '../../components/CardWithLongText/CardWithLongText'
import { ReactionBar } from '../../components/ReactionBar/ReactionBar'
import { Discussions } from '../../components/Discussions/Discussions'
import { getDiscussions, getIssueDetails, clearIssueDetails } from '../Issue/actions'
import { IssueProps, IssueStateProps, IssueDispatchProps } from './'
import { Loader } from '../../components/Loader/Loader'

const mapStateToProps = (state: IGlobalState): IssueStateProps => ({
  selectedIssueId: state.IssuesState.selectedIssueId,
  issueDetails: state.IssuesState.issueDetails,
  issueInfo: state.IssuesState.issues.find(issue => issue.id === state.IssuesState.selectedIssueId)
})

const mapDispatchToProps = (dispatch): IssueDispatchProps => ({
  // getDiscussions: (issueId: string) => dispatch(getDiscussions(issueId)),
  getIssueDetails: (issueId: string) => dispatch(getIssueDetails(issueId))
})

const data = [
  {
    "id": "1",
    "author": "samsmith",
    "date": "1552953600",
    "text": "51st Report of the Standing Committee on Public Accounts",
    "type": "pros"
  },
  {
    "id": "2",
    "author": "barackobama",
    "date": "1552953600",
    "text": "51st Report of the Standing Committee on Public Accounts",
    "type": "cons"
  },
  {
    "id": "3",
    "author": "jasonstatham",
    "date": "1552953600",
    "text": "51st Report of the Standing Committee on Public Accounts",
    "type": "cons"
  },
  {
    "id": "4",
    "author": "sylvesterstallone",
    "date": "1552953600",
    "text": "51st Report of the Standing Committee on Public Accounts",
    "type": "pros"
  },
  {
    "id": "5",
    "author": "jasonstatham",
    "date": "1552953600",
    "text": "51st Report of the Standing Committee on Public Accounts",
    "type": "pros"
  },

]

export class Component extends React.PureComponent<IssueProps> {
  static navigationOptions = {
    header: (props) => {
      const { title = '' } = get(props, 'scene.route.params', {}) as Issue

      return <HeaderRounded {...props} title={title} />
    }
  }

  componentDidMount() {
    const {
      getIssueDetails,
      selectedIssueId
    } = this.props

    getIssueDetails(selectedIssueId)
  }

  render() {
    const {
      issueDetails,
      selectedIssueId,
      issueInfo
    } = this.props

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>

          <View style={styles.info}>
            <Text style={styles.title}>{issueInfo.title}</Text>
            <View style={styles.inlineChildren}>
              <Tags
                tags={issueInfo.tags}
                tagStyle={{ marginBottom: 0 }}
              />
              <Text style={styles.textGrayed}>{issueInfo.ref}</Text>
              <Text style={styles.textGrayed}>{issueInfo.author}</Text>
            </View>
          </View>

          <View style={styles.content}>

            {
              issueDetails === null || issueDetails.id !== selectedIssueId
                ? (
                  <View style={{ height: 100 }}>
                    <Loader isDataLoaded={false}>{null}</Loader>
                  </View>
                )
                : (
                  <React.Fragment>
                    <CardWithLongText
                      title="Bill Summary"
                      text={issueDetails.billSummary}
                      numberOfLines={1}
                    />
                    <CardWithLongText
                      title="Issue Summary"
                      text={issueDetails.issueSummary}
                      numberOfLines={1}
                    />

                    {
                      issueDetails.rate
                        ? (
                          <View style={styles.card}>
                            <Text style={styles.rateTitle}>How would you rate your approval or dissatisfaction with this bill?</Text>
                            <ReactionBar {...issueInfo.reactions} onSelect={(reaction) => console.log(`reaction: ${reaction}`)} />
                          </View>
                        )
                        : <Discussions data={issueDetails.discussions} />
                    }
                  </React.Fragment>
                )
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export const IssueScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorLightBlue
  },
  info: {
    padding: 24,
    marginBottom: 8,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontFamily: 'poppins-semi-bold',
    marginBottom: 16
  },
  inlineChildren: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  textGrayed: {
    fontSize: 12,
    color: colorCoolGrey,
    fontFamily: 'poppins-medium',
    marginRight: 12
  },
  content: {
    marginLeft: 8,
    marginRight: 8
  },
  card: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: 'white',
  },
  rateTitle: {
    fontSize: 16,
    color: colorDarkGrey,
    fontFamily: 'poppins-semi-bold',
  }
})