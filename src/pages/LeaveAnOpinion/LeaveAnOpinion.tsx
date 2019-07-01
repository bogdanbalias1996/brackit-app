import * as React from 'react'
import { IGlobalState } from '../../coreTypes'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { SafeAreaView, ScrollView } from 'react-navigation'
import { HeaderRounded } from '../../components/HeaderRounded/HeaderRounded'
import { ReactionBar } from '../..//components/ReactionBar/ReactionBar'
import { colorDarkGrey, colorLightBlue, colorBlueberry } from '.././../variables'
import { LeaveAnOpinionProps } from './'
import { ButtonGroup } from '../../components/ButtonGroup/ButtonGroup'
import { TextArea } from '../../components/TextArea/TextArea'
import { goBack } from '../../navigationService'

const mapStateToProps = (state: IGlobalState) => ({
  issueInfo: state.IssuesState.issues.find(issue => issue.id === state.IssuesState.selectedIssueId)
})

const mapDispatchToProps = (dispatch) => ({
})

export class Component extends React.PureComponent<LeaveAnOpinionProps> {
  static navigationOptions = {
    header: (props) => (
      <HeaderRounded
        {...props}
        style={{ backgroundColor: colorLightBlue }}
        title="Leave an Opinion"
      />
    )
  }

  render() {
    const { issueInfo } = this.props

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentWrapper}>
          <ScrollView style={styles.content}>
            <View style={styles.card}>
              <Text style={styles.rateTitle}>How would you rate your approval or dissatisfaction with this bill?</Text>
              <ReactionBar {...issueInfo.reactions} onSelect={(reaction) => console.log(`reaction: ${reaction}`)} />
            </View>
            <ButtonGroup
              items={[
                { title: 'Pros', value: 'pros' },
                { title: 'Cons', value: 'cons' }
              ]}
            />
            <TextArea
              style={{ marginTop: 8 }}
              placeholder='Describe your opinion…'
              limit={200}
            />
          </ScrollView>

          <TouchableOpacity style={styles.btnPost} onPress={goBack}>
            <Text style={styles.btnPostText}>Post</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    )
  }
}

export const LeaveAnOpinionScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorLightBlue
  },
  contentWrapper: {
    flex: 1
  },
  content: {
    marginLeft: 8,
    marginRight: 8,
    marginTop: 14,
    flex: 1
  },
  card: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 4
  },
  rateTitle: {
    fontSize: 16,
    color: colorDarkGrey,
    fontFamily: 'poppins-semi-bold',
  },
  btnPost: {
    width: '100%',
    backgroundColor: colorBlueberry,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btnPostText: {
    padding: 13,
    color: 'white'
  }
})