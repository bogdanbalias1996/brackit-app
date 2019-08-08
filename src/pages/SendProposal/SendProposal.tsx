import * as React from "react";
import { connect } from "react-redux";
import { TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { SendProposalScreenProps } from ".";
import { IGlobalState } from "../../coreTypes";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { navigate } from "../../navigationService";
import { Icon } from "../../components/Icon/Icon";
import styles from "./SendProposal.styles";

const Header = props => (
  <HeaderRounded
    {...props}
    getLeftComponent={() => {
      return (
        <TouchableOpacity
          style={styles.iconCancel}
          onPress={() => {
            navigate({ routeName: "Play" });
          }}
        >
          <Icon size={24} name="cancel" color="white" />
        </TouchableOpacity>
      );
    }}
    title={"Send proposal".toUpperCase()}
    getRightComponent={() => {}}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<SendProposalScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  state = {
    proposal: "Hi, Challenge accepted!"
  };

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
      >
        <TextInput
          multiline={true}
          style={styles.input}
          onChangeText={text => this.setState({ proposal: text })}
          value={this.state.proposal}
        />
        <View style={styles.btnSubmit}>
          <ButtonStyled
            onPress={() => alert("ok")}
            text={"Send proposal".toUpperCase()}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export const SendProposalScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
