import * as React from "react";
import { StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import { TournamentDetailScreenProps } from "./";
import { WinnerTabItem } from "./WinnerTabItem";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<
  TournamentDetailScreenProps
> {
  state = {};

  renderItem = ({ item }) => {
    return <WinnerTabItem item={item} />;
  };

  render() {
    const { winners } = this.props;
    return (
      <FlatList
        data={winners}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        style={{ flex: 1 }}
      />
    );
  }
}

const styles = StyleSheet.create({});

export const WinnerTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
