import * as React from "react";
import { connect } from "react-redux";
import { IGlobalState } from "../../coreTypes";
import { SafeAreaView, FlatList } from "react-navigation";
import { TournamentDetailScreenProps } from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Text, View, TouchableOpacity } from "react-native";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { Icon } from "../../components/Icon/Icon";
import { Tabs, defaultTabsStyles } from "../../components/Tabs/Tabs";
import { AvatarStatus } from "../../components/AvatarStatus/AvatarStatus";

import { colorTextGray } from "../../variables";

import styles from "./TournamentDetail.styles";
import { navigate, goBack } from "../../navigationService";
import TabListItem from "../../components/TabListItem/TabListItem";
import { RegisterItem } from "./RegisterItem";

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

    const tabsConfig = [
      {
        title: "Register",
        component: () => (
          <RegisterItem
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
        component: () => (
          <FlatList
            data={activities}
            renderItem={TabListItem}
            keyExtractor={item => item.title}
            style={{ flex: 1 }}
          />
        )
      },
      {
        title: "Draws",
        component: () => <Text>Draws</Text>
      },
      {
        title: "Draws",
        component: () => <Text>Draws</Text>
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
