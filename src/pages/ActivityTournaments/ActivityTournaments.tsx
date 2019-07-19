import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import { LinearGradient } from "expo";

import { IGlobalState } from "../../coreTypes";
import { goBack } from "../../navigationService";
import {
  ActivityTournamentsScreenProps,
  ActivityTournamentsScreenDispatchProps
} from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import styles from "./ActivityTournaments.styles";
import { colorBlueStart, colorBlueEnd } from "../../variables";

const Header = props => (
  <HeaderRounded
    {...props}
    getLeftComponent={() => {
      return (
        <TouchableOpacity style={styles.iconCancel} onPress={() => goBack()}>
          <Icon name="left" color="white" />
        </TouchableOpacity>
      );
    }}
    title={"Activity - Tournaments".toUpperCase()}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = (
  dispatch
): ActivityTournamentsScreenDispatchProps => ({});

export class Component extends React.PureComponent<
  ActivityTournamentsScreenProps
> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  getItemName = (level, type) => {
    switch (type) {
      case "user-register":
        return (
          <Text style={styles.text}>You registered for the tournament</Text>
        );

      case "user-reached":
        return (
          <Text style={styles.text}>
            You reached <Text style={styles.boldText}>{level + " level "}</Text>
            on tournament
          </Text>
        );
    }
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.wrapImageAvatar}>
            <View style={styles.wrapIcon}>
              <Icon name="left" color="white" />
            </View>
            <LinearGradient
              start={[0, 0.5]}
              end={[1, 0.5]}
              colors={[colorBlueStart, colorBlueEnd]}
              style={styles.wrapIconLevel}
            >
              <Text style={styles.iconText}>{item.level}</Text>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.itemRight}>
          {this.getItemName(item.level, item.type)}
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
    );
  };

  render() {
    const data = [
      {
        id: "1",
        level: "1",
        title: "Badminton tournament",
        date: "Today at 6:00 PM",
        type: "user-register"
      },
      {
        id: "2",
        level: "1",
        title: "Badminton tournament",
        date: "Today at 6:00 PM",
        type: "user-reached"
      },
      {
        id: "3",
        level: "1",
        title: "Badminton tournament",
        date: "Today at 6:00 PM",
        type: "user-reached"
      },
      {
        id: "4",
        level: "3",
        title: "Badminton tournament",
        date: "Today at 6:00 PM",
        type: "user-reached"
      },
      {
        id: "5",
        level: "1",
        title: "Badminton tournament",
        date: "Today at 6:00 PM",
        type: "user-reached"
      },
      {
        id: "6",
        level: "4",
        title: "Badminton tournament",
        date: "Today at 6:00 PM",
        type: "user-reached"
      },
      {
        id: "7",
        level: "1",
        title: "Badminton tournament",
        date: "Today at 6:00 PM",
        type: "user-reached"
      },
      {
        id: "8",
        level: "5",
        title: "Badminton tournament",
        date: "Today at 6:00 PM",
        type: "user-reached"
      }
    ];
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          style={{ flex: 1 }}
        />
      </SafeAreaView>
    );
  }
}

export const ActivityTournamentsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
