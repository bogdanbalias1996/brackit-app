import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { SafeAreaView } from "react-navigation";
import DateTimePicker from "react-native-modal-datetime-picker";
import { format } from "date-fns";

import { IGlobalState } from "../../coreTypes";
import { navigate } from "../../navigationService";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { PlayStepFourScreenProps, PlayStepFourScreenDispatchProps } from ".";
import { setChallengeName } from "./actions";
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
          onPress={() => navigate({ routeName: "Play" })}
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

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = (dispatch): PlayStepFourScreenDispatchProps => ({
  setChallengeName: (name: string) => dispatch(setChallengeName(name))
});

export class Component extends React.PureComponent<PlayStepFourScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  state = {
    isDateTimePickerVisible: false,
    date: new Date()
  };

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.setState({ date: date });
    this.hideDateTimePicker();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapDataContent}>
          <TouchableOpacity onPress={this.showDateTimePicker}>
            <Text style={styles.text}>
              Choose date and time for your challenge
            </Text>
            <Text style={styles.dateText}>
              {format(this.state.date, "MM.DD.YYYY H:m")}
            </Text>
          </TouchableOpacity>
          <DateTimePicker
            mode="datetime"
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
        </View>
        <ButtonStyled
          style={styles.btnNext}
          onPress={() => alert("ok")}
          text={"Next".toUpperCase()}
        />
      </SafeAreaView>
    );
  }
}

export const PlayStepFourScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
