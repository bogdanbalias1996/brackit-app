import * as React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { colorBlack, colorTextGray } from "../variables";
import { IconSvg } from "../components/IconSvg/IconSvg";

import { PlayScreen } from "../pages/Play/Play";
import { DiscoverScreen } from "../pages/Discover/Discover";
import { ProfileScreen } from "../pages/Profile/Profile";
import { NotificationsScreen } from "../pages/Notifications/Notifications";
import { StoreScreen } from "../pages/Store/Store";

import { PartiesScreen } from "../pages/Parties/Parties";
import { PartyScreen } from "../pages/Party/Party";
import { PoliticiansScreen } from "../pages/Politicians/Politicians";
import { PoliticianScreen } from "../pages/Politician/Politician";
import { IssuesScreen } from "../pages/Issues/Issues";
import { IssueScreen } from "../pages/Issue/Issue";
import { LeaveAnOpinionScreen } from "../pages/LeaveAnOpinion/LeaveAnOpinion";
import { CreateAnIssueScreen } from "../pages/CreateAnIssue/CreateAnIssue";
import { ChooseImageScreen } from "../pages/CreateAnIssue/ChooseImage";
import { SettingsScreen } from "../pages/Settings/Settings";
import { CountrySelectionScreen } from "../pages/CountrySelection/CountrySelection";
import { WebViewScreen } from "../pages/WebView/WebView";

// Icons for BottomTabNavigator
import Play from "../../assets/play.svg";
import PlayActive from "../../assets/playActive.svg";
import MenuSearch from "../../assets/menu-search.svg";
import MenuSearchActive from "../../assets/menu-searchActive.svg";
import Profile from "../../assets/profile.svg";
import ProfileActive from "../../assets/profileActive.svg";
import Notifications from "../../assets/notification.svg";
import NotificationsActive from "../../assets/notificationActive.svg";
import Store from "../../assets/mall.svg";
import StoreActive from "../../assets/mallActive.svg";

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
    Discover: formatScreenProps("Discover", DiscoverScreen),
    Profile: formatScreenProps("Profile", ProfileScreen),
    Notifications: formatScreenProps("Notifications", NotificationsScreen),
    Store: formatScreenProps("Store", StoreScreen)
  },
  {
    initialRouteName: "Play",
    tabBarOptions: {
      style: {
        height: 62
      },
      activeTintColor: colorBlack,
      inactiveTintColor: colorTextGray,
      labelStyle: {
        marginTop: 3,
        fontSize: 13,
        fontWeight: "bold",
        letterSpacing: 0.5,
        fontFamily: "poppins-medium"
      },
      tabStyle: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: 7
      }
    },
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
        return <IconSvg name={iconName} />;
      }
    })
  }
);

export const MainNavigator = createStackNavigator({
  Tabs: {
    screen: TabsNavigator,
    navigationOptions: {
      header: null
    }
  },
  Party: PartyScreen,
  Politician: PoliticianScreen,
  Issue: IssueScreen,
  LeaveAnOpinion: LeaveAnOpinionScreen,
  CreateAnIssue: CreateAnIssueScreen,
  ChooseImage: ChooseImageScreen,
  Settings: SettingsScreen,
  CountrySelection: CountrySelectionScreen,
  WebView: WebViewScreen
});
