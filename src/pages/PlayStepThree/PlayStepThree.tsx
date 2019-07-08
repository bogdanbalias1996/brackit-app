import * as React from "react";
import { connect } from "react-redux";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-navigation";

import { IGlobalState } from "../../coreTypes";
import { PlayStepThreeScreenProps } from ".";
import { navigate } from "../../navigationService";
import { ChallengeItems } from "./ChallengeItem";
import { TournamentItems } from "./TournamentItem";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import { Tabs, defaultTabsStyles } from "../../components/Tabs/Tabs";
import styles from "./PlayStepThree.styles";

const Header = props => (
  <HeaderRounded
    {...props}
    getLeftComponent={() => {
      return (
        <TouchableOpacity
          style={styles.iconCancel}
          onPress={() => navigate({ routeName: "Play" })}
        >
          <Icon size={24} name="cancel" color="white" />
        </TouchableOpacity>
      );
    }}
    title={"Choose where".toUpperCase()}
    getRightComponent={() => {
      return (
        <Text style={styles.headerRightText}>{"Step 3/5".toUpperCase()}</Text>
      );
    }}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<PlayStepThreeScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  render() {
    const dataChallange = [
      {
        id: "1",
        name: "Katayama Fumiki",
        avatar: require("../../../assets/avatar.png"),
        avatarRate: 1500,
        avatarStatus: "Advanced",
        postTime: "5 min ago",
        postCity: "New York",
        coins: 400,
        title: "Who can beat me in ping pong?",
        whenText: "12 June, 6:00 pm",
        whereText: "Sun sea Resort Outer ring road, Bellandur, 560103",
        shares: 4,
        views: 4,
        comments: 2
      },
      {
        id: "2",
        name: "Anna Fali",
        avatar: require("../../../assets/avatar.png"),
        avatarRate: 1500,
        avatarStatus: "Beginner",
        postTime: "5 min ago",
        postCity: "New York",
        coins: 500,
        title: "Who can beat me in ping pong?",
        whenText: "12 June, 6:00 pm",
        whereText: "Sun sea Resort Outer ring road, Bellandur, 560103",
        shares: 4,
        views: 4,
        comments: 2
      }
    ];
    const dataTournament = [
      {
        id: "1",
        statusTournament: "super 1000",
        avaliableEntries: 100,
        entries: 95,
        title: "Who can beat me in ping pong?",
        subTitle: "single elimination",
        whenText: "12 June, 6:00 pm",
        whereText: "Sun sea Resort Outer ring road, Bellandur, 560103",
        prize: "12 000",
        singleEntryFee: "50",
        doubleEntryFee: "70",
        categories: ["U10", "U15", "U17"]
      },
      {
        id: "2",
        statusTournament: "super 100",
        avaliableEntries: 100,
        entries: 95,
        title: "Who can beat me in ping pong?",
        subTitle: "single elimination",
        whenText: "12 June, 6:00 pm",
        whereText: "Sun sea Resort Outer ring road, Bellandur, 560103",
        prize: "12 000",
        singleEntryFee: "100",
        doubleEntryFee: "70",
        categories: ["U10", "U15", "U17", "CD", "BS", "WD", "XD"]
      }
    ];
    const tabsConfig = [
      {
        title: "My matches",
        component: () => <Text>My matches</Text>
      },
      {
        title: "Challenges",
        component: () => <ChallengeItems data={dataChallange} />
      },
      {
        title: "Tournaments",
        component: () => <TournamentItems data={dataTournament} />
      }
    ];
    return (
      <SafeAreaView style={styles.container}>
        <Tabs
          config={tabsConfig}
          activeTabIndex={1}
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

export const PlayStepThreeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
