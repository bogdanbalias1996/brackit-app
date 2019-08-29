import * as React from "react";
import { connect } from "react-redux";
import { IGlobalState } from "../../coreTypes";
import { SafeAreaView, FlatList } from "react-navigation";
import { ProfileScreenProps } from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Text, View, TouchableOpacity } from "react-native";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { Icon } from "../../components/Icon/Icon";
import { AvatarStatus } from "../../components/AvatarStatus/AvatarStatus";

import { colorTextGray, colorLightGreyBlue } from "../../variables";

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
        <TouchableOpacity onPress={() => navigate({ routeName: "Settings" })}>
          <Icon name="nut-icon" />
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
        icon: require("../../../assets/racket.png"),
        points: 1300,
        name: "skill",
        isSolid: true
      },
      {
        icon: require("../../../assets/performance.png"),
        points: 1500,
        name: "performance"
      },
      {
        icon: require("../../../assets/activity.png"),
        points: 3040,
        name: "activity"
      },
      {
        icon: require("../../../assets/coin-color.png"),
        points: 50,
        name: "wallet"
      }
    ];

    const matches = [
      {
        title: "Challenges",
        component: "MatchesChallenges"
      },
      {
        title: "Tournaments",
        component: "MatchesTournaments"
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
                  <Icon name="edit" color={colorLightGreyBlue} size={24} />
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

        <View style={{ flex: 1 }}>
          <FlatList
            data={matches}
            renderItem={TabListItem}
            keyExtractor={item => item.title}
            style={{ flex: 1 }}
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
