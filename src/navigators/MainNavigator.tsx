import * as React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { colorBlack, colorTextGray, colorShadow } from "../variables";
import { IconSvg } from "../components/IconSvg/IconSvg";

import { PlayScreen } from "../pages/Play/Play";
import { DiscoverScreen } from "../pages/Discover/Discover";
import { ProfileScreen } from "../pages/Profile/Profile";
import { NotificationsScreen } from "../pages/Notifications/Notifications";
import { StoreScreen } from "../pages/Store/Store";
import { PlayStepOneScreen } from "../pages/PlayStepOne/PlayStepOne";
import { PlayStepTwoScreen } from "../pages/PlayStepTwo/PlayStepTwo";
import { PlayStepThreeScreen } from "../pages/PlayStepThree/PlayStepThree";
import { PlayStepFourScreen } from "../pages/PlayStepFour/PlayStepFour";
import { PlayStepFiveScreen } from "../pages/PlayStepFive/PlayStepFive";
import { CheckChallengeScreen } from "../pages/CheckChallenge/CheckChallenge";
import { ProfileEditScreen } from "../pages/ProfileEdit/ProfileEdit";
import { ActivityChallengesScreen } from "../pages/ActivityChallenges/ActivityChallenges";
import { ActivityTournamentsScreen } from "../pages/ActivityTournaments/ActivityTournaments";
import { ActivityPurchasesScreen } from "../pages/ActivityPurchases/ActivityPurchases";
import { MatchesChallengesScreen } from "../pages/MatchesChallenges/MatchesChallenges";
import { MatchesTournamentsScreen } from "../pages/MatchesTournaments/MatchesTournaments";
import { CreateTournamentScreen } from "../pages/CreateTournament/CreateTournament";
import { TournamentDetailScreen } from "../pages/TournamentDetail/TournamentDetail";
import { TournamentDrawsScreen } from "../pages/TournamentDraws/TournamentDraws";
import { DairyRecordScreen } from "../pages/DairyRecord/DairyRecord";
import { CreatorProposalsScreen } from "../pages/CreatorProposals/CreatorProposals";
import { ProposalsScreen } from "../pages/Proposals/Proposals";
import { SendProposalScreen } from "../pages/SendProposal/SendProposal";
import { CommentsScreen } from "../pages/Comments/Comments";

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
        return <IconSvg name={iconName} />;
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
    PlayStepOne: PlayStepOneScreen,
    PlayStepTwo: PlayStepTwoScreen,
    PlayStepThree: PlayStepThreeScreen,
    PlayStepFour: PlayStepFourScreen,
    PlayStepFive: PlayStepFiveScreen,
    CheckChallenge: CheckChallengeScreen,
    ProfileEdit: ProfileEditScreen,
    ActivityChallenges: ActivityChallengesScreen,
    ActivityTournaments: ActivityTournamentsScreen,
    ActivityPurchases: ActivityPurchasesScreen,
    MatchesChallenges: MatchesChallengesScreen,
    MatchesTournaments: MatchesTournamentsScreen,
    CreateTournament: CreateTournamentScreen,
    TournamentDetail: TournamentDetailScreen,
    TournamentDraws: TournamentDrawsScreen,
    DairyRecord: DairyRecordScreen,
    CreatorProposals: CreatorProposalsScreen,
    Proposals: ProposalsScreen,
    SendProposal: SendProposalScreen,
    Comments: CommentsScreen
  }
  // {
  //   initialRouteName: "CreateTournament"
  // }
);
