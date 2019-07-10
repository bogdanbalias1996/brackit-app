import * as React from "react";
import { connect } from "react-redux";
import { IGlobalState } from "../../coreTypes";
import { SafeAreaView } from "react-navigation";
import { ProfileScreenProps } from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Text, View, TouchableOpacity } from "react-native";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { Icon } from "../../components/Icon/Icon";
import { Tabs, defaultTabsStyles } from "../../components/Tabs/Tabs";

import {
  colorLightBlue,
  colorTextBlue,
  colorBorderBlue
} from "../../variables";

import styles from "./Profile.styles";
import ProfileStatsItem from "./ProfileStatsItem";

const Header = props => (
  <HeaderRounded
    {...props}
    title={"Profile".toUpperCase()}
    style={{
      backgroundColor: props.feed ? "white" : colorLightBlue
    }}
    getRightComponent={() => {
      return (
        <TouchableOpacity
          onPress={() => {
            alert("ok");
          }}
        >
          <Icon
            size={24}
            name="gamepad"
            style={{ transform: [{ rotate: "45deg" }] }}
          />
        </TouchableOpacity>
      );
    }}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<ProfileScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  render() {
    const statsItems = [
      {
        icon: "racket",
        points: 1300,
        name: "skill",
        isSolid: true
      },
      {
        icon: "bar",
        points: 1500,
        name: "performance"
      },
      {
        icon: "flash",
        points: 3040,
        name: "activity"
      },
      {
        icon: "coin-black",
        points: 1000,
        name: "wallet"
      }
    ];

    const tabsConfig = [
      {
        title: "Matches",
        component: () => <Text>Matches</Text>
      },
      {
        title: "Activity",
        component: () => <Text>Activity</Text>
      },
      {
        title: "Diary",
        component: () => <Text>Diary</Text>
      }
    ];

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.profileTop}>
            <ButtonStyled
              text={"Buddy".toUpperCase()}
              onPress={() => alert("ok")}
              style={{ shadowRadius: 0, shadowOffset: { width: 0, height: 0 } }}
            />
          </View>
          <View>
            <Text
              style={{ paddingVertical: 15, fontFamily: "montserrat-medium" }}
            >
              Trains at <Text style={styles.levelUp}>Level Up Sports</Text>
            </Text>
            <Text style={{ lineHeight: 21, fontFamily: "montserrat-medium" }}>
              Enthusiastically incubate front-end platforms whereas covalent
              ideas. Globally recaptiualize target cost effective services for
              athletes
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 20
            }}
          >
            {statsItems.map((item, i) => (
              <ProfileStatsItem {...item} key={i} />
            ))}
          </View>
        </View>

        <View>
          <Tabs
            config={tabsConfig}
            activeTabIndex={0}
            stylesItem={defaultTabsStyles.roundedTabs}
            stylesItemText={{ fontSize: 13 }}
            stylesTabsContainer={{
              backgroundColor: "white",
              marginTop: 10,
              paddingTop: 0,
              paddingBottom: 20,
              marginBottom: 20,
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 10
              },
              justifyContent: "center",
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 5
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export const ProfileScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
