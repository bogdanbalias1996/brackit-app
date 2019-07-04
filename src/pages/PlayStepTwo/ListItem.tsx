import * as React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo";
import { connect } from "react-redux";

import {
  colorBorder,
  colorBlack,
  colorTextGray,
  colorGrayStart,
  colorGrayEnd,
  colorVeryLightBlue
} from "../../variables";
import {
  PlayStepTwoScreenStateProps,
  PlayStepTwoScreenDispatchProps,
  PlayStepTwoScreenProps
} from "./";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { setChallengeUsers } from "./actions";
import { Icon } from "../../components/Icon/Icon";

const mapStateToProps = state => ({
  challengeUsers: state.ChallengeState.challengeUsers
});
const mapDispatchToProps = (dispatch): PlayStepTwoScreenDispatchProps => ({
  setChallengeUsers: (userId: string) => dispatch(setChallengeUsers(userId))
});

export class Component extends React.PureComponent<PlayStepTwoScreenProps> {
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
    const { data, title } = this.props;

    return (
      <View style={{ flexShrink: 1 }}>
        <Text style={styles.listTitle}>{title}</Text>
        <SearchBar onChangeText={val => this.setState({ search: val })} />
        <TouchableOpacity onPress={() => alert("ok")} style={styles.selectAll}>
          <Text style={styles.selectAllText}>Select all</Text>
        </TouchableOpacity>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          style={{ marginBottom: 148 }}
        />
        <LinearGradient
          colors={[colorGrayStart, colorGrayEnd]}
          style={styles.wrapButton}
        >
          <ButtonStyled
            onPress={() => alert("ok")}
            text={"Next".toUpperCase()}
          />
        </LinearGradient>
      </View>
    );
  }
}

export const ListItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

const styles = StyleSheet.create({
  listTitle: {
    fontFamily: "montserrat-medium",
    fontSize: 14,
    color: colorTextGray,
    paddingHorizontal: 20,
    marginBottom: 15
  },
  card: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    // backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: colorBorder,
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15
  },
  name: {
    fontFamily: "montserrat-semibold",
    fontSize: 16,
    color: colorBlack
  },
  address: {
    fontFamily: "montserrat-medium",
    fontSize: 14,
    color: colorTextGray
  },
  selectAll: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: colorBorder,
    borderTopWidth: 1
  },
  selectAllText: {
    fontFamily: "montserrat-semibold",
    fontSize: 16,
    color: colorBlack,
    textAlign: "center"
  },
  wrapButton: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 140,
    height: 85,
    width: "100%"
  }
});
