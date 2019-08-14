import * as React from "react";
import { connect } from "react-redux";
import {
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Platform
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { CommentsScreenProps } from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { navigate } from "../../navigationService";
import { Icon } from "../../components/Icon/Icon";
import { ProposalItem } from "../../components/ProposalItem/ProposalItem";
import styles from "./Comments.styles";

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
    title={"Comments".toUpperCase()}
    getRightComponent={() => {}}
  />
);

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<CommentsScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  state = {
    comment: ""
  };

  renderItem = ({ item }) => {
    return <ProposalItem item={item} hideButton={true} />;
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        extraScrollHeight={Platform.OS === "ios" ? 25 : 0}
      >
        <Text style={styles.proposalsText}>
          {params && params.data.comments.length + " comments"}
        </Text>
        {params && (
          <FlatList
            data={params.data.comments}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="say something nice …"
          autoCorrect={false}
          onChangeText={text => this.setState({ comment: text })}
          value={this.state.comment}
        />
      </KeyboardAwareScrollView>
    );
  }
}

export const CommentsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
