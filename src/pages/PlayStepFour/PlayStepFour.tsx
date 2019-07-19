import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { SafeAreaView } from "react-navigation";
import DateTimePicker from "react-native-modal-datetime-picker";
import { format } from "date-fns";

import { clearChallengeData } from "../Play/actions";
import { navigate } from "../../navigationService";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { PlayStepFourScreenProps, PlayStepFourScreenDispatchProps } from ".";
import { setChallengeDate } from "./actions";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import styles from "./PlayStepFour.styles";

const Header = props => (
  <HeaderRounded
    {...props}
    getLeftComponent={() => {
      return (
        <TouchableOpacity
          style={styles.iconCancel}
          onPress={() => {
            navigate({ routeName: "Play" });
            props.clearChallengeData();
          }}
        >
          <Icon size={24} name="cancel" color="white" />
        </TouchableOpacity>
      );
    }}
    title={"Choose when".toUpperCase()}
    getRightComponent={() => {
      return (
        <Text style={styles.headerRightText}>{"Step 4/5".toUpperCase()}</Text>
      );
    }}
  />
);

const ConnectedHeader = connect(
  null,
  dispatch => ({
    clearChallengeData: () => dispatch(clearChallengeData())
  })
)(Header);

const mapStateToProps = state => ({
  challengeDate: state.ChallengeState.challengeDate
});
const mapDispatchToProps = (dispatch): PlayStepFourScreenDispatchProps => ({
  setChallengeDate: (date: string) => dispatch(setChallengeDate(date)),
  clearChallengeData: () => dispatch(clearChallengeData())
});

export class Component extends React.PureComponent<PlayStepFourScreenProps> {
  static navigationOptions = {
    header: props => <ConnectedHeader {...props} />
  };

  state = {
    isDateTimePickerVisible: false,
    date: Object.keys(this.props.challengeDate).length
      ? this.props.challengeDate
      : new Date()
  };

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.setState({ date: date });
    this.props.setChallengeDate(date.toString());
    this.hideDateTimePicker();
  };

  render() {
    const { challengeDate } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapDataContent}>
          <TouchableOpacity onPress={this.showDateTimePicker}>
            <Text style={styles.text}>
              Choose date and time for your challenge
            </Text>
            <Text style={styles.dateText}>
              {format(this.state.date, "D MMMM, HH:mm a")}
            </Text>
          </TouchableOpacity>
          <DateTimePicker
            mode="datetime"
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
        </View>
        <View style={{ opacity: Object.keys(challengeDate).length ? 1 : 0.2 }}>
          <ButtonStyled
            style={styles.btnNext}
            onPress={() => {
              Object.keys(challengeDate).length &&
                navigate({ routeName: "PlayStepFive" });
            }}
            text={"Next".toUpperCase()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export const PlayStepFourScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
