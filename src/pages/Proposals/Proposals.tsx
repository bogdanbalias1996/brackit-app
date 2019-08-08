import * as React from "react";
import { connect } from "react-redux";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";

import { ProposalsScreenProps } from ".";
import { IGlobalState } from "../../coreTypes";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { navigate } from "../../navigationService";
import { Icon } from "../../components/Icon/Icon";
import { AvatarStatus } from "../../components/AvatarStatus/AvatarStatus";
import styles from "./Proposals.styles";

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

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<ProposalsScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <ScrollView style={styles.container}>
        {params &&
          params.data.shares.map((item, i) => {
            return (
              <View style={styles.wrapProposal} key={i}>
                <AvatarStatus
                  avatar={item.avatar}
                  avatarRate={item.avatarRate}
                />
                <View style={styles.wrapProposalContent}>
                  <Text style={styles.proposalTitle}>{item.name}</Text>
                  <Text style={styles.proposalDate}>{item.date}</Text>
                </View>
              </View>
            );
          })}
      </ScrollView>
    );
  }
}

export const ProposalsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
