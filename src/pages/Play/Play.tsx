import * as React from "react";
import { connect } from "react-redux";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { IGlobalState } from "../../coreTypes";
import { SafeAreaView } from "react-navigation";

import { PlayScreenProps } from ".";
import { ChallengeItems } from "./ChallengeItem";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import { ButtonInputStyled } from "../../components/ButtonInputStyled/ButtonInputStyled";
import { Tabs, defaultTabsStyles } from "../../components/Tabs/Tabs";
import { colorLightBlue } from "../../variables";

const Header = props => (
  <HeaderRounded
    {...props}
    style={{
      backgroundColor: props.feed ? "white" : colorLightBlue
    }}
    getLeftComponent={() => {
      return (
        <ButtonInputStyled
          onPress={() => alert("ok")}
          text="Create a challenge …"
        />
      );
    }}
    getRightComponent={() => {
      return (
        <TouchableOpacity onPress={() => alert("ok")}>
          <Icon size={24} name="sort" color="white" />
        </TouchableOpacity>
      );
    }}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<PlayScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  render() {
    const data = [
      {
        id: "1",
        name: "Katayama Fumiki",
        avatar: require("../../../assets/illustration1_2x.png"),
        avatarRate: 1500,
        postTime: "5 min ago",
        postCity: "New York",
        postRate: 400,
        title: "Who can beat me in ping pong?",
        whenText: "12 June, 6:00 pm",
        whereText: "Sun sea Resort Outer ring road, Bellandur, 560103",
        btnText: "see proposals | 2",
        comments: 2
      },
      {
        id: "2",
        name: "Anna Fali",
        avatar: require("../../../assets/illustration2_2x.png"),
        avatarRate: 1500,
        postTime: "5 min ago",
        postCity: "New York",
        postRate: 500,
        title: "Who can beat me in ping pong?",
        whenText: "12 June, 6:00 pm",
        whereText: "Sun sea Resort Outer ring road, Bellandur, 560103",
        btnText: "see proposals | 2",
        comments: 2
      }
    ];
    const tabsConfig = [
      {
        title: "Challenges",
        component: () => <ChallengeItems data={data} />
      },
      {
        title: "Tournaments",
        component: () => <Text>Issues Component2</Text>
      }
    ];
    return (
      <SafeAreaView style={styles.container}>
        <Tabs
          config={tabsConfig}
          stylesItem={defaultTabsStyles.roundedTabs}
          stylesTabsContainer={{
            backgroundColor: "transparent",
            marginBottom: 16
          }}
        />
      </SafeAreaView>
    );
  }
}

export const PlayScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
