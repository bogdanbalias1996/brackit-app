import * as React from "react";
import { connect } from "react-redux";
import { Text, TouchableOpacity, Image, View, FlatList } from "react-native";
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
import { colorVeryLightBlue } from "../../variables";

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
    search: ""
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
        style={[
          styles.card,
          {
            backgroundColor: this.ifExist(challengeUsers, id)
              ? colorVeryLightBlue
              : "white"
          }
        ]}
      >
        <Image style={styles.avatar} source={avatar} resizeMode="cover" />
        <View>
          <Text style={styles.name}>{name}</Text>
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

    return (
      <SafeAreaView style={styles.container}>
        <SearchBar onChangeText={val => this.setState({ search: val })} />
        <TouchableOpacity onPress={() => alert("ok")} style={styles.selectAll}>
          <Text style={styles.selectAllText}>Select all</Text>
        </TouchableOpacity>
        <FlatList
          data={dataOpen}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
        <ButtonStyled onPress={() => alert("ok")} text={"Next".toUpperCase()} />
      </SafeAreaView>
    );
  }
}

export const PlayStepTwoScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
