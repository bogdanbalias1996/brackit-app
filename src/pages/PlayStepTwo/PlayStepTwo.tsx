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

import { clearChallengeData } from "../Play/actions";
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
import { setChallengeUsers, setAllChallengeUsers } from "./actions";
import styles from "./PlayStepTwo.styles";
import { colorBlack, colorTextGray, colorBlueEnd } from "../../variables";

const Header = props => (
  <HeaderRounded
    {...props}
    getLeftComponent={() => {
      return (
        <TouchableOpacity
          style={styles.iconCancel}
          onPress={() => {
            navigate({ routeName: "Play" });
            props.clearChallengeData();
          }}
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

const ConnectedHeader = connect(
  null,
  dispatch => ({
    clearChallengeData: () => dispatch(clearChallengeData())
  })
)(Header);

const mapStateToProps = state => ({
  challengeUsers: state.ChallengeState.challengeUsers
});
const mapDispatchToProps = (dispatch): PlayStepTwoScreenDispatchProps => ({
  setChallengeUsers: (user: string) => dispatch(setChallengeUsers(user)),
  setAllChallengeUsers: (users: string) =>
    dispatch(setAllChallengeUsers(users)),
  clearChallengeData: () => dispatch(clearChallengeData())
});

export class Component extends React.PureComponent<PlayStepTwoScreenProps> {
  static navigationOptions = {
    header: props => <ConnectedHeader {...props} />
  };

  state = {
    search: "",
    showOpenAll: false
  };

  toggleSwitch = () => {
    this.setState({ showOpenAll: !this.state.showOpenAll });
  };

  ifExist = (array, obj): any => {
    if (array.find(x => x.id === obj.id)) {
      return true;
    }
  };

  renderItem = ({ item }) => {
    const { id, name, avatar, address } = item;
    const { setChallengeUsers, challengeUsers } = this.props;
    return (
      <TouchableOpacity
        onPress={() => setChallengeUsers(item)}
        style={styles.card}
      >
        <View style={styles.avatarWrap}>
          <Image
            style={[
              styles.avatar,
              { opacity: this.ifExist(challengeUsers, item) ? 0.5 : 1 }
            ]}
            source={avatar}
            resizeMode="cover"
          />
          {this.ifExist(challengeUsers, item) ? (
            <Icon
              size={24}
              name="check"
              color={colorBlueEnd}
              style={styles.checkIcon}
            />
          ) : null}
        </View>
        <View>
          <Text
            style={[
              styles.name,
              {
                color: this.ifExist(challengeUsers, item)
                  ? colorBlueEnd
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
    const { setAllChallengeUsers, challengeUsers } = this.props;

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
              trackColor={{ true: colorBlueEnd, false: "grey" }}
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
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => setAllChallengeUsers(dataOpen)}
              style={styles.selectAll}
            >
              <Text style={styles.selectAllText}>Select all</Text>
            </TouchableOpacity>
            <FlatList
              data={dataOpen}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
              style={{ flex: 1 }}
            />
          </View>
        ) : null}
        <View style={{ opacity: challengeUsers.length ? 1 : 0.2 }}>
          <ButtonStyled
            style={styles.btnNext}
            onPress={() =>
              challengeUsers.length && navigate({ routeName: "PlayStepThree" })
            }
            text={"Next".toUpperCase()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export const PlayStepTwoScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
