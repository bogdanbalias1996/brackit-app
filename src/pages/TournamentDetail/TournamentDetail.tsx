import * as React from "react";
import { connect } from "react-redux";
import { IGlobalState } from "../../coreTypes";
import { SafeAreaView } from "react-navigation";
import { TournamentDetailScreenProps } from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { Icon } from "../../components/Icon/Icon";
import { Tabs, defaultTabsStyles } from "../../components/Tabs/Tabs";

import { colorTextGray } from "../../variables";

import styles from "./TournamentDetail.styles";
import { goBack } from "../../navigationService";
import { RegisterTab } from "./RegisterTab";
import { EntryTab } from "./EntryTab";
import { WinnerTab } from "./WinnerTab";
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

    const drawsData = params.tournamentData.events.map(val => {
      return {
        title: val.value,
        component: "TournamentDraws"
      };
    });

    const tabsConfig = [
      // {
      //   title: "Register",
      //   component: () => (
      //     <RegisterTab
      //       name={params.tournamentData.title}
      //       academy={params.tournamentData.location}
      //       events={params.tournamentData.events}
      //       entryFee={params.tournamentData.singleEntryFee}
      //       totalEntryFee={params.tournamentData.doubleEntryFee}
      //     />
      //   )
      // },
      {
        title: "Entries",
        component: () => <EntryTab events={params.tournamentData.events} />
      },
      {
        title: "Draws",
        component: () => (
          <FlatList
            data={drawsData}
            renderItem={TabListItem}
            keyExtractor={item => item.title}
            style={{ flex: 1 }}
          />
        )
      },
      {
        title: "Winners",
        component: () => <WinnerTab events={params.tournamentData.events} />
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
              {params && params.tournamentData.date}
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
