import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image
} from "react-native";
import { connect } from "react-redux";

import { IGlobalState } from "../../coreTypes";
import { goBack } from "../../navigationService";
import {
  ActivityPurchasesScreenProps,
  ActivityPurchasesScreenDispatchProps
} from ".";
import { setChallengeName } from "./actions";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import styles from "./ActivityPurchases.styles";

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
    title={"My purchases activity".toUpperCase()}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = (
  dispatch
): ActivityPurchasesScreenDispatchProps => ({
  setChallengeName: (name: string) => dispatch(setChallengeName(name))
});

export class Component extends React.PureComponent<
  ActivityPurchasesScreenProps
> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.wrapImageAvatar}>
            <View style={styles.wrapIcon}>
              <Image
                source={require("../../../assets/coin-color.png")}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
        <View style={styles.itemRight}>
          <Text style={styles.text}>
            You bought{" "}
            <Text style={styles.boldText}>{item.coins + " coins"}</Text>
          </Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
    );
  };

  render() {
    const data = [
      {
        id: "1",
        coins: "50",
        date: "Today at 6:00 PM"
      },
      {
        id: "2",
        coins: "150",
        date: "Today at 6:00 PM"
      },
      {
        id: "3",
        coins: "200",
        date: "Today at 6:00 PM"
      },
      {
        id: "4",
        coins: "300",
        date: "Today at 6:00 PM"
      },
      {
        id: "5",
        coins: "500",
        date: "Today at 6:00 PM"
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

export const ActivityPurchasesScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
