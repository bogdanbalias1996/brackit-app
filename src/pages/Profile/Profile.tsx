import * as React from "react";
import { connect } from "react-redux";
import { IGlobalState } from "../../coreTypes";
import { SafeAreaView, FlatList } from "react-navigation";
import { ProfileScreenProps } from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Text, View, TouchableOpacity } from "react-native";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { Icon } from "../../components/Icon/Icon";
import { Tabs, defaultTabsStyles } from "../../components/Tabs/Tabs";
import { AvatarStatus } from "../../components/AvatarStatus/AvatarStatus";

import { colorTextGray } from "../../variables";

import styles from "./Profile.styles";
import ProfileStatsItem from "./ProfileStatsItem";
import { navigate } from "../../navigationService";
import TabListItem from "../../components/TabListItem/TabListItem";

const Header = props => (
  <HeaderRounded
    {...props}
    title={"Profile".toUpperCase()}
    getRightComponent={() => {
      return (
        <TouchableOpacity
          onPress={() => {
            alert("ok");
          }}
        >
          <Icon name="gamepad" style={{ transform: [{ rotate: "45deg" }] }} />
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

    const activities = [
      {
        title: "Challenges",
        component: "ActivityChallenges"
      },
      {
        title: "Tournaments",
        component: "ActivityTournaments"
      },
      {
        title: "Purchases",
        component: "ActivityPurchases"
      }
    ];

    const tabsConfig = [
      {
        title: "Matches",
        component: () => <Text>Matches</Text>
      },
      {
        title: "Activity",
        component: () => (
          <FlatList
            data={activities}
            renderItem={TabListItem}
            keyExtractor={item => item.title}
          />
        )
      },
      {
        title: "Diary",
        component: () => <Text>Diary</Text>
      }
    ];

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.profileWrapper}>
          <View style={styles.profileHeaderWrapper}>
            <TouchableOpacity
              style={styles.profileHeader}
              onPress={() => navigate({ routeName: "ProfileEdit" })}
            >
              <AvatarStatus
                avatar={require("../../../assets/avatar.png")}
                avatarRate={1300}
                size={56}
              />

              <View style={styles.profileHeaderInfoWrapper}>
                <View style={styles.profileHeaderInfo}>
                  <Text style={styles.profileHeaderInfoName}>Erika Mateo</Text>
                  <Icon name="pencil" color={colorTextGray} />
                </View>
                <Text
                  style={[
                    styles.profileHeaderInfoLocation,
                    styles.profileHeaderInfoText
                  ]}
                >
                  Barcelona, Spain
                </Text>
                <Text style={styles.profileHeaderInfoText}>26y</Text>
              </View>
            </TouchableOpacity>

            <ButtonStyled
              text={"Buddy".toUpperCase()}
              onPress={() => alert("ok")}
              style={styles.profileHeaderButton}
            />
          </View>

          <View>
            <Text style={styles.profileMainTrains}>
              Trains at{" "}
              <Text style={styles.profileMainHighlighted}>Level Up Sports</Text>
            </Text>
            <Text style={styles.profileMainInfo}>
              Enthusiastically incubate front-end platforms whereas covalent
              ideas. Globally recaptiualize target cost effective services for
              athletes
            </Text>
          </View>
          <View style={styles.profileStatsWrapper}>
            {statsItems.map((item, i) => (
              <ProfileStatsItem {...item} key={i} />
            ))}
          </View>
        </View>

        <View>
          <Tabs
            config={tabsConfig}
            activeTabIndex={1}
            stylesItem={defaultTabsStyles.roundedTabs}
            stylesItemText={styles.tabsItemText}
            stylesTabsContainer={styles.tabsContainer}
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
