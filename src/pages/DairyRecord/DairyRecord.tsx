import * as React from "react";
import { Text, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import { connect } from "react-redux";

import { IGlobalState } from "../../coreTypes";
import { goBack } from "../../navigationService";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { DairyRecordScreenProps, DairyRecordScreenDispatchProps } from ".";
import { setChallengeName } from "./actions";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import styles from "./DairyRecord.styles";
import { colorTextGray } from "../../variables";

const Header = props => (
  <HeaderRounded
    {...props}
    getLeftComponent={() => {
      return (
        <TouchableOpacity style={styles.iconCancel} onPress={() => goBack()}>
          <Icon name="cancel" color="white" />
        </TouchableOpacity>
      );
    }}
    title={"Record dairy".toUpperCase()}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = (dispatch): DairyRecordScreenDispatchProps => ({
  setChallengeName: (name: string) => dispatch(setChallengeName(name))
});

export class Component extends React.PureComponent<DairyRecordScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  state = {
    text: ""
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => alert("ok")}
          style={styles.wrapSmileBtn}
        >
          <Text style={styles.smileBtnText}>I am feeling</Text>
          <Icon name="emoji" color={colorTextGray} size={30} />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          multiline={true}
          numberOfLines={8}
          placeholder="Enter your note"
          placeholderTextColor={colorTextGray}
          autoCorrect={false}
          onChangeText={text => this.setState({ text: text })}
          value={this.state.text}
        />
        <ButtonStyled
          style={styles.btnNext}
          onPress={() => alert("ok")}
          text={"Next".toUpperCase()}
        />
      </SafeAreaView>
    );
  }
}

export const DairyRecordScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
