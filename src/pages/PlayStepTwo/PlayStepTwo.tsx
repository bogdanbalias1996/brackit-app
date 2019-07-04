import * as React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text } from "react-native";
import { IGlobalState } from "../../coreTypes";
import { SafeAreaView } from "react-navigation";

import { PlayStepTwoScreenProps } from ".";
import { ListItems } from "./ListItem";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Tabs, defaultTabsStyles } from "../../components/Tabs/Tabs";
import { colorLightBlue } from "../../variables";

const Header = props => (
  <HeaderRounded
    {...props}
    style={{
      backgroundColor: props.feed ? "white" : colorLightBlue
    }}
    title={"Choose who".toUpperCase()}
    getRightComponent={() => {
      return (
        <Text style={styles.headerRightText}>{"Step 2/5".toUpperCase()}</Text>
      );
    }}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<PlayStepTwoScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  render() {
    const dataOpen = [
      {
        id: "1",
        name: "Katayama Fumiki",
        avatar: require("../../../assets/illustration1_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "2",
        name: "Katayama Fumiki1",
        avatar: require("../../../assets/illustration2_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "3",
        name: "Katayama Fumiki",
        avatar: require("../../../assets/illustration1_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "4",
        name: "Katayama Fumiki1",
        avatar: require("../../../assets/illustration2_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "5",
        name: "Katayama Fumiki",
        avatar: require("../../../assets/illustration1_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "6",
        name: "Katayama Fumiki1",
        avatar: require("../../../assets/illustration2_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "7",
        name: "Katayama Fumiki1",
        avatar: require("../../../assets/illustration2_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "8",
        name: "Katayama Fumiki1",
        avatar: require("../../../assets/illustration2_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "9",
        name: "Katayama Fumiki1",
        avatar: require("../../../assets/illustration2_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "10",
        name: "Katayama Fumiki1",
        avatar: require("../../../assets/illustration2_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "11",
        name: "Katayama Fumiki1",
        avatar: require("../../../assets/illustration2_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      }
    ];
    const tabsConfig = [
      {
        title: "Open",
        component: () => (
          <ListItems
            title="Your challenge can see anyone and accept it"
            data={dataOpen}
          />
        )
      },
      {
        title: "Buddies",
        component: () => (
          <ListItems
            title="Your challenge can see only your friends"
            data={dataOpen}
          />
        )
      }
    ];
    return (
      <SafeAreaView style={styles.container}>
        <Tabs
          config={tabsConfig}
          stylesItem={defaultTabsStyles.roundedTabs}
          stylesTabsContainer={{
            backgroundColor: "transparent",
            marginBottom: 10
          }}
        />
      </SafeAreaView>
    );
  }
}

export const PlayStepTwoScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 64
  },
  headerRightText: {
    fontFamily: "montserrat-semibold",
    fontSize: 12,
    color: "white"
  }
});
