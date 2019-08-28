import * as React from "react";
import { connect } from "react-redux";
import { IGlobalState } from "../../coreTypes";
import { NotificationsScreenProps } from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Text, View, Image, ScrollView } from "react-native";
import { Icon } from "../../components/Icon/Icon";
import styles from "./Notifications.styles";

const Header = props => (
  <HeaderRounded
    {...props}
    title={"Notifications".toUpperCase()}
    getRightComponent={() => {}}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<NotificationsScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  getItemName = (name, type) => {
    switch (type) {
      case "user-accept-proposal":
        return (
          <Text style={styles.text}>
            You accepted proposal from{" "}
            <Text style={styles.boldText}>{name}</Text>
          </Text>
        );

      case "someone-leave-proposal":
        return (
          <Text style={styles.text}>
            <Text style={styles.boldText}>{name}</Text> leave proposal to your
            challange
          </Text>
        );

      case "someone-leave-comment":
        return (
          <Text style={styles.text}>
            <Text style={styles.boldText}>{name}</Text> leave comment to your
            challenge
          </Text>
        );

      case "user-leave-proposal":
        return (
          <Text style={styles.text}>
            You leave proposal to <Text style={styles.boldText}>{name}</Text>{" "}
            challenge
          </Text>
        );

      case "someone-accept-proposal":
        return (
          <Text style={styles.text}>
            <Text style={styles.boldText}>{name}</Text> accepted your proposal
          </Text>
        );

      case "someone-beat-user":
        return (
          <Text style={styles.text}>
            <Text style={styles.boldText}>{name}</Text> beat you
          </Text>
        );

      case "user-leave-comment":
        return (
          <Text style={styles.text}>
            You commented <Text style={styles.boldText}>{name}</Text> challenge
          </Text>
        );

      case "user-won":
        return (
          <Text style={styles.text}>
            You won <Text style={styles.boldText}>{name}</Text>
          </Text>
        );
    }
  };
  getItemImage = (avatar, type) => {
    switch (type) {
      case "user-accept-proposal":
        return (
          <View style={styles.wrapIcon}>
            <Icon name="left" color="white" />
          </View>
        );

      case "someone-leave-proposal":
        return (
          <View style={styles.wrapImageAvatar}>
            <Image source={avatar} style={styles.avatar} resizeMode="cover" />
            <View style={styles.wrapIconSmall}>
              <Icon name="left" color="white" size={12} />
            </View>
          </View>
        );

      case "someone-leave-comment":
        return (
          <View style={styles.wrapImageAvatar}>
            <Image source={avatar} style={styles.avatar} resizeMode="cover" />
            <View style={styles.wrapIconSmall}>
              <Icon name="left" color="white" size={12} />
            </View>
          </View>
        );

      case "user-leave-proposal":
        return (
          <View style={styles.wrapIcon}>
            <Icon name="left" color="white" />
          </View>
        );

      case "someone-accept-proposal":
        return (
          <View style={styles.wrapImageAvatar}>
            <Image source={avatar} style={styles.avatar} resizeMode="cover" />
            <View style={styles.wrapIconSmall}>
              <Icon name="left" color="white" size={12} />
            </View>
          </View>
        );

      case "someone-beat-user":
        return (
          <View style={styles.wrapImageAvatar}>
            <Image source={avatar} style={styles.avatar} resizeMode="cover" />
            <View style={styles.wrapIconSmall}>
              <Icon name="left" color="white" size={12} />
            </View>
          </View>
        );

      case "user-leave-comment":
        return (
          <View style={styles.wrapIcon}>
            <Icon name="left" color="white" />
          </View>
        );

      case "user-won":
        return (
          <View style={styles.wrapIcon}>
            <Icon name="left" color="white" />
          </View>
        );
    }
  };

  render() {
    const data = [
      {
        id: "1",
        name: "Afonso Pinto",
        title: "Who can beat me in ping pong?",
        date: "Today at 6:00 PM",
        type: "user-accept-proposal"
      },
      {
        id: "2",
        avatar: require("../../../assets/avatar.png"),
        name: "Afonso Pinto",
        title: "Who can beat me in ping pong?",
        date: "Today at 6:00 PM",
        type: "someone-leave-proposal"
      },
      {
        id: "3",
        avatar: require("../../../assets/avatar.png"),
        name: "Afonso Pinto",
        title: "Who can beat me in ping pong?",
        date: "Today at 6:00 PM",
        type: "someone-leave-comment"
      },
      {
        id: "4",
        name: "Afonso Pinto",
        title: "Who can beat me in ping pong?",
        date: "Today at 6:00 PM",
        type: "user-leave-proposal"
      },
      {
        id: "5",
        avatar: require("../../../assets/avatar.png"),
        name: "Afonso Pinto",
        title: "Who can beat me in ping pong?",
        date: "Today at 6:00 PM",
        type: "someone-accept-proposal"
      },
      {
        id: "6",
        avatar: require("../../../assets/avatar.png"),
        name: "Afonso Pinto",
        title: "Who can beat me in ping pong?",
        date: "Today at 6:00 PM",
        type: "someone-beat-user"
      },
      {
        id: "7",
        name: "Afonso Pinto",
        title: "Who can beat me in ping pong?",
        date: "Today at 6:00 PM",
        type: "user-leave-comment"
      },
      {
        id: "8",
        name: "Afonso Pinto",
        title: "Who can beat me in ping pong?",
        date: "Today at 6:00 PM",
        type: "user-won"
      }
    ];
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.notificationTitle}>New</Text>
        {data.map((item, i) => {
          return (
            <View key={i} style={styles.item}>
              <View style={styles.itemLeft}>
                {this.getItemImage(item.avatar, item.type)}
              </View>
              <View style={styles.itemRight}>
                {this.getItemName(item.name, item.type)}
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

export const NotificationsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
