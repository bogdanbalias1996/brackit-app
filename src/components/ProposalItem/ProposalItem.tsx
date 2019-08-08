import * as React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";

import { ProposalItemProps } from "./";
import { AvatarStatus } from "../../components/AvatarStatus/AvatarStatus";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import styles from "./ProposalItem.styles";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<ProposalItemProps> {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.wrapProposal}>
        <AvatarStatus avatar={item.avatar} avatarRate={item.avatarRate} />
        <View style={styles.wrapProposalContent}>
          <Text style={styles.proposalTitle}>{item.name}</Text>
          <Text style={styles.proposalComment}>{item.comment}</Text>
          <View style={styles.wrapBottomProposal}>
            <Text style={styles.proposalDate}>{item.date}</Text>
            <ButtonStyled
              onPress={() => alert("ok")}
              text={"Accept".toUpperCase()}
              type="right"
            />
          </View>
        </View>
      </View>
    );
  }
}

export const ProposalItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
