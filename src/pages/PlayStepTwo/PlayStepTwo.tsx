import * as React from "react";
import { connect } from "react-redux";
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  FlatList,
  Switch
} from "react-native";
import { SafeAreaView } from "react-navigation";

import { navigate } from "../../navigationService";
import {
  PlayStepTwoScreenStateProps,
  PlayStepTwoScreenDispatchProps,
  PlayStepTwoScreenProps
} from ".";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { setChallengeUsers } from "./actions";
import styles from "./PlayStepTwo.styles";
import { colorBlack, colorTextGray, colorEndHeader } from "../../variables";

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
    title={"Choose who".toUpperCase()}
    getRightComponent={() => {
      return (
        <Text style={styles.headerRightText}>{"Step 2/5".toUpperCase()}</Text>
      );
    }}
  />
);

const mapStateToProps = state => ({
  challengeUsers: state.ChallengeState.challengeUsers
});
const mapDispatchToProps = (dispatch): PlayStepTwoScreenDispatchProps => ({
  setChallengeUsers: (userId: string) => dispatch(setChallengeUsers(userId))
});

export class Component extends React.PureComponent<PlayStepTwoScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  state = {
    search: "",
    showOpenAll: false
  };

  toggleSwitch = () => {
    this.setState({ showOpenAll: !this.state.showOpenAll });
  };

  ifExist = (array, id): any => {
    return array.includes(id);
  };

  renderItem = ({ item }) => {
    const { id, name, avatar, address } = item;
    const { setChallengeUsers, challengeUsers } = this.props;

    return (
      <TouchableOpacity
        onPress={() => setChallengeUsers(id)}
        style={styles.card}
      >
        <View style={styles.avatarWrap}>
          <Image
            style={[
              styles.avatar,
              { opacity: this.ifExist(challengeUsers, id) ? 0.5 : 1 }
            ]}
            source={avatar}
            resizeMode="cover"
          />
          {this.ifExist(challengeUsers, id) ? (
            <Icon
              size={24}
              name="check"
              color={colorEndHeader}
              style={styles.checkIcon}
            />
          ) : null}
        </View>
        <View>
          <Text
            style={[
              styles.name,
              {
                color: this.ifExist(challengeUsers, id)
                  ? colorEndHeader
                  : colorBlack
              }
            ]}
          >
            {name}
          </Text>
          <Text style={styles.address}>{address}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const dataOpen = [
      {
        id: "1",
        name: "Katayama Fumiki",
        avatar: require("../../../assets/illustration1_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "2",
        name: "Katayama Fumiki1",
        avatar: require("../../../assets/illustration2_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "3",
        name: "Katayama Fumiki",
        avatar: require("../../../assets/illustration1_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "4",
        name: "Katayama Fumiki1",
        avatar: require("../../../assets/illustration2_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "5",
        name: "Katayama Fumiki",
        avatar: require("../../../assets/illustration1_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "6",
        name: "Katayama Fumiki1",
        avatar: require("../../../assets/illustration2_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "7",
        name: "Katayama Fumiki1",
        avatar: require("../../../assets/illustration2_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "8",
        name: "Katayama Fumiki1",
        avatar: require("../../../assets/illustration2_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "9",
        name: "Katayama Fumiki1",
        avatar: require("../../../assets/illustration2_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "10",
        name: "Katayama Fumiki1",
        avatar: require("../../../assets/illustration2_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      },
      {
        id: "11",
        name: "Katayama Fumiki1",
        avatar: require("../../../assets/illustration2_2x.png"),
        address: "JP Nagar Bagaluru, Ind"
      }
    ];
    const { showOpenAll } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar
          placeholder="Search for players"
          onChangeText={val => this.setState({ search: val })}
        />
        <View style={styles.clickableItem}>
          <View style={styles.switchWrap}>
            <Text
              style={[
                styles.title,
                { color: showOpenAll ? colorBlack : colorTextGray }
              ]}
            >
              {"Open to All".toUpperCase()}
            </Text>
            <Switch
              trackColor={{ true: colorEndHeader, false: "grey" }}
              thumbColor="white"
              ios_backgroundColor="grey"
              onValueChange={this.toggleSwitch}
              value={showOpenAll}
            />
          </View>
          <Text style={styles.text}>
            Your challenge is open to everyone. Anyone can accept it.
          </Text>
        </View>
        <View style={styles.clickableItem}>
          <Text
            style={[
              styles.title,
              { color: !showOpenAll ? colorBlack : colorTextGray }
            ]}
          >
            {"Buddies".toUpperCase()}
          </Text>
          <Text style={styles.text}>
            Your challenge is visible only to your buddies.
          </Text>
        </View>
        {!this.state.showOpenAll ? (
          <View>
            <TouchableOpacity
              onPress={() => alert("ok")}
              style={styles.selectAll}
            >
              <Text style={styles.selectAllText}>Select all</Text>
            </TouchableOpacity>
            <FlatList
              data={dataOpen}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
              style={{ marginBottom: 240 }}
            />
          </View>
        ) : null}
        <ButtonStyled
          style={styles.btnNext}
          onPress={() => navigate({ routeName: "PlayStepThree" })}
          text={"Next".toUpperCase()}
        />
      </SafeAreaView>
    );
  }
}

export const PlayStepTwoScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
