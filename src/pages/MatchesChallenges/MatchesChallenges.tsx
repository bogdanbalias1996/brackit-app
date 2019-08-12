import * as React from "react";
import { Text, TouchableOpacity, SafeAreaView } from "react-native";
import { Calendar } from "react-native-calendars";
import { connect } from "react-redux";

import { IGlobalState } from "../../coreTypes";
import { goBack } from "../../navigationService";
import {
  MatchesChallengesScreenProps,
  MatchesChallengesScreenDispatchProps
} from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import styles from "./MatchesChallenges.styles";
import { colorBlueStart } from "../../variables";

const Header = props => (
  <HeaderRounded
    {...props}
    getLeftComponent={() => {
      return (
        <TouchableOpacity style={styles.iconCancel} onPress={() => goBack()}>
          <Icon name="left" color="white" />
        </TouchableOpacity>
      );
    }}
    title={"Matches - Challenges".toUpperCase()}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = (
  dispatch
): MatchesChallengesScreenDispatchProps => ({});

export class Component extends React.PureComponent<
  MatchesChallengesScreenProps
> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  state = {
    selectedDate: "",
    markedDates: { "2019-08-17": { marked: true } }
  };

  render() {
    console.log(this.state.selectedDate);
    return (
      <SafeAreaView style={styles.container}>
        <Calendar
          markedDates={{
            ...this.state.markedDates,
            [this.state.selectedDate]: {
              selected: true,
              dotColor: "#ffffff"
            }
          }}
          onDayPress={(day, localDay) => {
            this.setState({ selectedDate: day.dateString });
          }}
        />
      </SafeAreaView>
    );
  }
}

export const MatchesChallengesScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
