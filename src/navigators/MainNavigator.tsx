import * as React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Image } from "react-native";
import { colorBlack, colorTextGray, colorShadow } from "../variables";

import { PlayScreen } from "../pages/Play/Play";
import { ProfileScreen } from "../pages/Profile/Profile";
import { NotificationsScreen } from "../pages/Notifications/Notifications";
import { ProfileEditScreen } from "../pages/ProfileEdit/ProfileEdit";
import { MatchesChallengesScreen } from "../pages/MatchesChallenges/MatchesChallenges";
import { MatchesTournamentsScreen } from "../pages/MatchesTournaments/MatchesTournaments";
import { TournamentDetailScreen } from "../pages/TournamentDetail/TournamentDetail";
import { TournamentDrawsScreen } from "../pages/TournamentDraws/TournamentDraws";
import { CommentsScreen } from "../pages/Comments/Comments";
import { AddBuddiesScreen } from "../pages/AddBuddies/AddBuddies";
import { SettingsScreen } from "../pages/Settings/Settings";

// Icons for BottomTabNavigator
const Play = require("../../assets/play.png");
const PlayActive = require("../../assets/playActive.png");
const MenuSearch = require("../../assets/menu-search.png");
const MenuSearchActive = require("../../assets/menu-searchActive.png");
const Notifications = require("../../assets/notification.png");
const NotificationsActive = require("../../assets/notificationActive.png");
const Store = require("../../assets/mall.png");
const StoreActive = require("../../assets/mallActive.png");
const Profile = require("../../assets/profile.png");
const ProfileActive = require("../../assets/profileActive.png");

const formatScreenProps = (ScreenName, ScreenComponent) => {
  return {
    screen: createStackNavigator({
      [ScreenName]: ScreenComponent
    })
  };
};

export const TabsNavigator = createBottomTabNavigator(
  {
    Play: formatScreenProps("Play", PlayScreen),
    Profile: formatScreenProps("Profile", ProfileScreen),
    Notifications: formatScreenProps("Notifications", NotificationsScreen)
  },
  {
    tabBarOptions: {
      style: {
        height: 62,
        borderTopColor: "transparent",
        shadowColor: colorShadow,
        shadowOffset: {
          width: 0,
          height: 4
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 7
      },
      activeTintColor: colorBlack,
      inactiveTintColor: colorTextGray,
      labelStyle: {
        marginTop: 3,
        fontSize: 13,
        letterSpacing: 0.5,
        fontFamily: "montserrat-bold"
      },
      tabStyle: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: 7
      }
    },
    initialRouteName: "Play",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        switch (routeName) {
          case "Play":
            iconName = focused ? PlayActive : Play;
            break;
          case "Discover":
            iconName = focused ? MenuSearchActive : MenuSearch;
            break;
          case "Profile":
            iconName = focused ? ProfileActive : Profile;
            break;
          case "Notifications":
            iconName = focused ? NotificationsActive : Notifications;
            break;
          case "Store":
            iconName = focused ? StoreActive : Store;
            break;
        }
        return (
          <Image
            source={iconName}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        );
      }
    })
  }
);

export const MainNavigator = createStackNavigator(
  {
    Tabs: {
      screen: TabsNavigator,
      navigationOptions: {
        header: null
      }
    },
    ProfileEdit: ProfileEditScreen,
    MatchesChallenges: MatchesChallengesScreen,
    MatchesTournaments: MatchesTournamentsScreen,
    TournamentDetail: TournamentDetailScreen,
    TournamentDraws: TournamentDrawsScreen,
    Comments: CommentsScreen,
    AddBuddies: AddBuddiesScreen,
    Settings: SettingsScreen
  }
  // {
  //   initialRouteName: "AddBuddies"
  // }
);
