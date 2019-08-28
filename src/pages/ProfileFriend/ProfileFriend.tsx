import * as React from "react";
import { connect } from "react-redux";
import { IGlobalState } from "../../coreTypes";
import { SafeAreaView, FlatList } from "react-navigation";
import { ProfileFriendScreenProps } from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Text, View, TouchableOpacity } from "react-native";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { AvatarStatus } from "../../components/AvatarStatus/AvatarStatus";

import { Icon } from "../../components/Icon/Icon";
import styles from "./ProfileFriend.styles";
import ProfileStatsItem from "./ProfileStatsItem";
import { navigate, goBack } from "../../navigationService";
import TabListItem from "../../components/TabListItem/TabListItem";

const Header = props => (
  <HeaderRounded
    {...props}
    getLeftComponent={() => {
      return (
        <TouchableOpacity style={styles.iconCancel} onPress={() => goBack()}>
          <Icon name="left" />
        </TouchableOpacity>
      );
    }}
    title={"Profile".toUpperCase()}
    getRightComponent={() => {}}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<ProfileFriendScreenProps> {
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
            <TouchableOpacity style={styles.profileHeader} onPress={() => {}}>
              <AvatarStatus
                avatar={require("../../../assets/avatar.png")}
                avatarRate={1300}
                size={56}
              />

              <View style={styles.profileHeaderInfoWrapper}>
                <View style={styles.profileHeaderInfo}>
                  <Text style={styles.profileHeaderInfoName}>Erika Mateo</Text>
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
              text={"+ Buddy".toUpperCase()}
              onPress={() => navigate({ routeName: "AddBuddies" })}
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

export const ProfileFriendScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
