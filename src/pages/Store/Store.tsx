import * as React from "react";
import { connect } from "react-redux";
import { IGlobalState } from "../../coreTypes";
import { SafeAreaView } from "react-navigation";
import { StoreScreenProps } from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Text, StyleSheet } from "react-native";
import { colorLightBlue } from "../../variables";

const Header = props => (
  <HeaderRounded
    {...props}
    title="Create challenge"
    style={{
      backgroundColor: props.feed ? "white" : colorLightBlue
    }}
    getRightComponent={() => {}}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<StoreScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Store</Text>
      </SafeAreaView>
    );
  }
}

export const StoreScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorLightBlue
  }
});
