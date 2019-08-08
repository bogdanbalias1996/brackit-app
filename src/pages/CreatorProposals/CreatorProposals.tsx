import * as React from "react";
import { connect } from "react-redux";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";

import { CreatorProposalsScreenProps } from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { navigate } from "../../navigationService";
import { Icon } from "../../components/Icon/Icon";
import { ProposalItem } from "../../components/ProposalItem/ProposalItem";
import { colorTextGray } from "../../variables";
import styles from "./CreatorProposals.styles";
import { setAcceptedProposalUser } from "../../pages/CreatorProposals/actions";
import { ModalProposal } from "../../components/ModalProposal/ModalProposal";

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
    title={"Proposals".toUpperCase()}
    getRightComponent={() => {}}
  />
);

const mapStateToProps = state => ({
  acceptedProposalUser: state.ChallengeState.acceptedProposalUser
});
const mapDispatchToProps = dispatch => ({
  setAcceptedProposalUser: (user: any) =>
    dispatch(setAcceptedProposalUser(user))
});

export class Component extends React.PureComponent<
  CreatorProposalsScreenProps
> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  state = {
    showAcceptedModal: false,
    selectedUser: {}
  };

  toggleModal = () => {
    this.setState({ showAcceptedModal: !this.state.showAcceptedModal });
  };

  render() {
    const { params } = this.props.navigation.state;
    const { setAcceptedProposalUser, acceptedProposalUser } = this.props;
    const { showAcceptedModal } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <View style={styles.questionItem}>
            <Icon
              size={16}
              style={styles.questionIcon}
              name="play"
              color={colorTextGray}
            />
            <Text style={styles.cardTitle}>{params && params.data.title}</Text>
          </View>
          <View style={styles.questionItem}>
            <Icon
              size={16}
              style={styles.questionIcon}
              name="location"
              color={colorTextGray}
            />
            <Text style={styles.answerText}>
              {params && params.data.whereText}
            </Text>
          </View>
          <View style={styles.questionItem}>
            <Icon
              size={16}
              style={styles.questionIcon}
              name="calendar"
              color={colorTextGray}
            />
            <Text style={styles.answerText}>
              {params && params.data.whenText}
            </Text>
          </View>
        </View>
        <Text style={styles.proposalsText}>
          {params && params.data.shares.length + " proposals"}
        </Text>
        {params &&
          params.data.shares.map((item, i) => {
            return (
              <ProposalItem
                item={item}
                key={i}
                showButton={
                  Object.keys(acceptedProposalUser).length &&
                  item.id === acceptedProposalUser.id
                    ? false
                    : true
                }
                onClick={user => {
                  this.setState({
                    selectedUser: user,
                    showAcceptedModal: true
                  });
                }}
              />
            );
          })}
        <ModalProposal
          selectedUser={this.state.selectedUser}
          visible={showAcceptedModal}
          onClose={this.toggleModal}
          onSubmit={user => setAcceptedProposalUser(user)}
        />
      </ScrollView>
    );
  }
}

export const CreatorProposalsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
