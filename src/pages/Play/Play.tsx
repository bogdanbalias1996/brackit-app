import * as React from "react";
import { connect } from "react-redux";
import { TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-navigation";

import { PlayScreenProps } from ".";
import { navigate } from "../../navigationService";
import { ChallengeItems } from "./ChallengeItem";
import { TournamentItems } from "./TournamentItem";
import { LeaderBoardItems } from "./LeaderBoardItem";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import { ModalCoins } from "../../components/ModalCoins/ModalCoins";
import { ModalCoinsPurchase } from "../../components/ModalCoinsPurchase/ModalCoinsPurchase";
import { ButtonHeaderStyled } from "../../components/ButtonHeaderStyled/ButtonHeaderStyled";
import { Tabs, defaultTabsStyles } from "../../components/Tabs/Tabs";
import { setActiveTab } from "./actions";
import styles from "./Play.styles";

const Header = props => (
  <HeaderRounded
    {...props}
    getLeftComponent={() => {
      return props.activeTab && props.activeTab === 2 ? (
        <ButtonHeaderStyled
          onPress={() => navigate({ routeName: "CreateTournament" })}
          text="Post tournament"
        />
      ) : (
        <ButtonHeaderStyled
          onPress={() => navigate({ routeName: "PlayStepOne" })}
          text="Post a challenge"
        />
      );
    }}
    getRightComponent={() => {
      return (
        <View style={styles.wrapHeaderRight}>
          <TouchableOpacity
            style={styles.wrapHeaderRightIcon}
            onPress={() => alert("ok")}
          >
            <Icon size={30} name="search" color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.wrapHeaderRightIcon}
            onPress={() =>
              props.navigation.setParams({
                showCoins: !props.navigation.state.params.showCoins
              })
            }
          >
            <Image
              style={{ width: 20 }}
              source={require("../../../assets/coin-color.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      );
    }}
  />
);

const mapStateToProps = state => ({
  activeTab: state.ChallengeState.activeTab
});
const mapDispatchToProps = dispatch => ({
  setActiveTab: val => dispatch(setActiveTab(val))
});

const ConnectedHeader = connect(
  mapStateToProps,
  null
)(Header);

export class Component extends React.PureComponent<PlayScreenProps> {
  static navigationOptions = ({ navigation }) => ({
    header: props => <ConnectedHeader {...props} navigation={navigation} />
  });

  componentDidMount() {
    this.props.navigation.setParams({ showCoins: false });
  }

  toggleModal = () => {
    this.props.navigation.setParams({
      showCoins: !this.props.navigation.state.params.showCoins
    });
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
      },
      {
        id: "3",
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
        date: "12 June, 6:00 pm",
        location: "Sun sea Resort Outer ring road, Bellandur, 560103",
        prize: "12 000",
        singleEntryFee: "50",
        doubleEntryFee: "70",
        events: [
          {
            id: "1",
            value: "U10",
            entries: [
              {
                id: "01",
                name: "Anton Brownstein",
                avatar: require("../../../assets/avatar.png"),
                rating: 1500,
                info: "Level Up Sports "
              },
              {
                id: "02",
                name: "Anton Brownstein1",
                avatar: require("../../../assets/avatar.png"),
                rating: 500,
                info: "Level Up Sports "
              }
            ],
            finalMatch: {
              id: "1",
              compatitors: [
                {
                  players: [
                    {
                      name: "Fua Lamba",
                      avatar: require("../../../assets/avatar.png")
                    },
                    {
                      name: "Fua Lamba1",
                      avatar: require("../../../assets/avatar.png")
                    }
                  ],
                  rating: 1200,
                  scores: ["10", "15", "5"],
                  isWinner: true
                },
                {
                  players: [
                    {
                      name: "Fua Lamba1",
                      avatar: require("../../../assets/avatar.png")
                    },
                    {
                      name: "Fua Lamba2",
                      avatar: require("../../../assets/avatar.png")
                    }
                  ],
                  rating: 1000,
                  scores: ["8", "10", "10"],
                  isWinner: false
                }
              ]
            }
          },
          {
            id: "2",
            value: "U15"
          },
          {
            id: "3",
            value: "WD2",
            double: true
          }
        ]
      },
      {
        id: "2",
        statusTournament: "super 100",
        avaliableEntries: 100,
        entries: 95,
        title: "Who can beat me in ping pong?",
        subTitle: "single elimination",
        date: "12 June, 6:00 pm",
        location: "Sun sea Resort Outer ring road, Bellandur, 560103",
        prize: "12 000",
        singleEntryFee: "100",
        doubleEntryFee: "70",
        events: [
          {
            id: "1",
            value: "U10"
          },
          {
            id: "2",
            value: "U15"
          },
          {
            id: "3",
            value: "U17"
          },
          {
            id: "4",
            value: "CD1"
          },
          {
            id: "5",
            value: "BS1"
          },
          {
            id: "6",
            value: "WD2",
            double: true
          },
          {
            id: "7",
            value: "XD8",
            double: true
          }
        ]
      }
    ];
    const dataLeaderBoard = [
      {
        id: "1",
        name: "Katayama Fumiki",
        number: "1",
        avatar: require("../../../assets/avatar.png"),
        avatarRate: 1500,
        numberPlays: "70",
        numberWonPlays: "19",
        performance: "600"
      },
      {
        id: "2",
        name: "Rita Leite",
        number: "2",
        avatar: require("../../../assets/avatar.png"),
        avatarRate: 300,
        numberPlays: "70",
        numberWonPlays: "20",
        performance: "600"
      },
      {
        id: "3",
        name: "Erika Mateo",
        number: "3",
        avatar: require("../../../assets/avatar.png"),
        avatarRate: 1000,
        numberPlays: "70",
        numberWonPlays: "15",
        performance: "600"
      },
      {
        id: "4",
        name: "Katayama Fumiki1jkjn",
        number: "4",
        avatar: require("../../../assets/avatar.png"),
        avatarRate: 1500,
        numberPlays: "70",
        numberWonPlays: "19",
        performance: "600"
      },
      {
        id: "5",
        name: "Katayama Fumiki2",
        number: "5",
        avatar: require("../../../assets/avatar.png"),
        avatarRate: 1500,
        numberPlays: "70",
        numberWonPlays: "22",
        performance: "600"
      }
    ];
    const tabsConfig = [
      {
        title: "Challenges",
        component: () => <ChallengeItems data={dataChallange} />,
        onPress: () => this.props.setActiveTab(1)
      },
      {
        title: "Tournaments",
        component: () => <TournamentItems data={dataTournament} />,
        onPress: () => this.props.setActiveTab(2)
      },
      {
        title: "Leaderboard",
        component: () => <LeaderBoardItems data={dataLeaderBoard} />,
        onPress: () => this.props.setActiveTab(0)
      }
    ];
    return (
      <SafeAreaView style={styles.container}>
        <Tabs
          config={tabsConfig}
          style={{ flex: 1 }}
          stylesItem={defaultTabsStyles.roundedTabs}
          stylesTabsContainer={{
            backgroundColor: "transparent",
            marginBottom: 10
          }}
        />
        <ModalCoins
          visible={
            this.props.navigation.state.params
              ? this.props.navigation.state.params.showCoins
              : false
          }
          onClose={this.toggleModal}
          navigation={this.props.navigation}
        />
        <ModalCoinsPurchase
          visible={
            this.props.navigation.state.params
              ? this.props.navigation.state.params.purchaseSuccess
              : false
          }
          onClose={() =>
            this.props.navigation.setParams({ purchaseSuccess: false })
          }
        />
      </SafeAreaView>
    );
  }
}

export const PlayScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
