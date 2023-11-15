import * as React from "react";
import { TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import { connect } from "react-redux";

import { IGlobalState } from "../../coreTypes";
import { goBack } from "../../navigationService";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { DairyRecordScreenProps, DairyRecordScreenDispatchProps } from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import { ReactionAdd } from "../../components/ReactionAdd/ReactionAdd";
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
const mapDispatchToProps = (dispatch): DairyRecordScreenDispatchProps => ({});

export class Component extends React.PureComponent<DairyRecordScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  state = {
    text: "",
    emoji: "blush"
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ReactionAdd
          onSelect={selectedReaction => {
            this.setState({ emoji: selectedReaction });
          }}
          text="I am feeling"
          emoji={this.state.emoji}
        />
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
