import * as React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { LinearGradient } from "expo";

import {
  PlayStepThreeScreenStateProps,
  PlayStepThreeScreenDispatchProps,
  PlayStepThreeScreenProps
} from ".";
import { setChallengePlaces } from "./actions";
import {
  colorTextGray,
  colorBlack,
  colorEndHeader,
  colorBorder
} from "../../variables";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { Icon } from "../../components/Icon/Icon";

const mapStateToProps = state => ({
  challengePlaces: state.ChallengeState.challengePlaces
});
const mapDispatchToProps = (dispatch): PlayStepThreeScreenDispatchProps => ({
  setChallengePlaces: (placeId: string) => dispatch(setChallengePlaces(placeId))
});

export class Component extends React.PureComponent<PlayStepThreeScreenProps> {
  renderItem = ({ item }) => {
    const { challengePlaces, setChallengePlaces } = this.props;
    console.log(challengePlaces);
    return (
      <TouchableOpacity
        onPress={() => {
          setChallengePlaces(item.id);
        }}
        style={styles.card}
      >
        <View style={styles.avatarWrap}>
          <Image
            style={[
              styles.avatar,
              { opacity: this.ifExist(challengePlaces, item.id) ? 0.5 : 1 }
            ]}
            source={item.avatar}
            resizeMode="cover"
          />
          {this.ifExist(challengePlaces, item.id) ? (
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
                color: this.ifExist(challengePlaces, item.id)
                  ? colorEndHeader
                  : colorBlack
              }
            ]}
          >
            {item.title}
          </Text>
          <Text style={styles.address}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  ifExist = (array, id): any => {
    return array.includes(id);
  };

  render() {
    const { data } = this.props;
    return (
      <FlatList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    );
  }
}

export const ChallengeItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: colorBorder,
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
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
  avatarWrap: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15
  },
  checkIcon: {
    position: "absolute"
  }
});
