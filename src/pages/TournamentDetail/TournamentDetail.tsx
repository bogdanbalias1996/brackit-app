import * as React from "react";
import { connect } from "react-redux";
import { IGlobalState } from "../../coreTypes";
import { SafeAreaView } from "react-navigation";
import { TournamentDetailScreenProps } from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "../../components/Icon/Icon";
import { Tabs, defaultTabsStyles } from "../../components/Tabs/Tabs";

import { colorTextGray } from "../../variables";

import styles from "./TournamentDetail.styles";
import { goBack } from "../../navigationService";
import { RegisterTab } from "./RegisterTab";
import { EntryTab } from "./EntryTab";
import { WinnerTab } from "./WinnerTab";

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
    title={"Tournament details".toUpperCase()}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<
  TournamentDetailScreenProps
> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  render() {
    const { params } = this.props.navigation.state;

    const entries = [
      {
        title: "U10",
        id: "1",
        entriesNumber: "211",
        entries: [
          {
            name: "Anton Brownstein",
            subTitle: "Level Up Sports",
            skill: 200,
            avatar: require("../../../assets/avatar.png")
          },
          {
            name: "Anton Brownstein1",
            subTitle: "Level Up Sports",
            skill: 500,
            avatar: require("../../../assets/avatar.png")
          }
        ]
      },
      {
        title: "U15",
        id: "2",
        entriesNumber: "110",
        entries: [
          {
            name: "Fua Lamba",
            subTitle: "Level Up Sports",
            skill: 1200,
            avatar: require("../../../assets/avatar.png")
          },
          {
            name: "Fua Lamba1",
            subTitle: "Level Up Sports",
            skill: 500,
            avatar: require("../../../assets/avatar.png")
          }
        ]
      }
    ];
    const winners = [
      {
        title: "U10",
        id: "1",
        winners: [
          {
            name: "Anton Brownstein",
            skill: 200,
            winner: true,
            avatar: require("../../../assets/avatar.png"),
            scores: ["7", "15", "14"]
          },
          {
            name: "Anton Brownstein1",
            skill: 500,
            avatar: require("../../../assets/avatar.png"),
            scores: ["6", "10", "20"]
          }
        ]
      },
      {
        title: "U17",
        id: "2",
        winners: [
          {
            name: "Anton Brownstein",
            skill: 200,
            avatar: require("../../../assets/avatar.png"),
            scores: ["7", "15", "14"]
          },
          {
            name: "Anton Brownstein1",
            skill: 1500,
            winner: true,
            avatar: require("../../../assets/avatar.png"),
            scores: ["6", "17", "20"]
          }
        ]
      }
    ];
    const tabsConfig = [
      {
        title: "Register",
        component: () => (
          <RegisterTab
            name={params.tournamentData.title}
            academy={params.tournamentData.whereText}
            events={params.tournamentData.categories}
            entryFee={params.tournamentData.singleEntryFee}
            totalEntryFee={params.tournamentData.doubleEntryFee}
          />
        )
      },
      {
        title: "Entries",
        component: () => <EntryTab entries={entries} />
      },
      {
        title: "Draws",
        component: () => <Text>Draws</Text>
      },
      {
        title: "Winners",
        component: () => <WinnerTab winners={winners} />
      }
    ];

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.tournamentContent}>
          <Text style={styles.status}>
            {params && params.tournamentData.statusTournament.toUpperCase()}
          </Text>
          <Text style={styles.title}>
            {params && params.tournamentData.title}
          </Text>
          <View style={styles.textItem}>
            <Icon
              size={16}
              style={styles.textIcon}
              name="calendar"
              color={colorTextGray}
            />
            <Text style={styles.text}>
              {params && params.tournamentData.whenText}
            </Text>
          </View>
          <View style={styles.textItem}>
            <Icon
              size={16}
              style={styles.textIcon}
              name="cup"
              color={colorTextGray}
            />
            <Text style={styles.text}>
              {params && params.tournamentData.prize + " INR"}
            </Text>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <Tabs
            config={tabsConfig}
            style={{ flex: 1 }}
            stylesItem={defaultTabsStyles.roundedTabs}
            stylesItemText={styles.tabsItemText}
            stylesTabsContainer={styles.tabsContainer}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export const TournamentDetailScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
