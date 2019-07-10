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

import {
  PlayStepThreeScreenStateProps,
  PlayStepThreeScreenDispatchProps,
  PlayStepThreeScreenProps
} from ".";
import { setChallengePlaces, setFavouritePlace } from "./actions";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { Icon } from "../../components/Icon/Icon";
import { navigate } from "../../navigationService";
import {
  colorTextGray,
  colorBlack,
  colorEndHeader,
  colorBorder,
  colorLike
} from "../../variables";

const mapStateToProps = state => ({
  challengePlaces: state.ChallengeState.challengePlaces,
  favouritePlaces: state.ChallengeState.favoritePlaces
});
const mapDispatchToProps = (dispatch): PlayStepThreeScreenDispatchProps => ({
  setChallengePlaces: (placeId: string) =>
    dispatch(setChallengePlaces(placeId)),
  setFavouritePlace: (placeId: string) => dispatch(setFavouritePlace(placeId))
});

export class Component extends React.PureComponent<PlayStepThreeScreenProps> {
  renderItem = ({ item }) => {
    const {
      challengePlaces,
      favouritePlaces,
      setChallengePlaces,
      setFavouritePlace
    } = this.props;
    return (
      this.ifExist(favouritePlaces, item.id) && (
        <TouchableOpacity
          onPress={() => {
            setChallengePlaces(item.id);
          }}
          style={styles.card}
        >
          <View style={styles.wrapContent}>
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
          </View>
          <TouchableOpacity
            style={styles.wrapFavorite}
            onPress={() => setFavouritePlace(item.id)}
          >
            <Icon
              size={24}
              name="favorite"
              color={
                this.ifExist(favouritePlaces, item.id)
                  ? colorLike
                  : colorTextGray
              }
            />
          </TouchableOpacity>
        </TouchableOpacity>
      )
    );
  };

  ifExist = (array, id): any => {
    return array.includes(id);
  };

  render() {
    const { data, challengePlaces, favouritePlaces } = this.props;

    return (
      <View style={{ flex: 1, flexShrink: 0, position: "relative" }}>
        <View style={styles.wrapTabText}>
          <Text style={styles.tabText}>
            {"Choose from your favorite locations. Toggle the "}
            <Icon size={24} name="favorite" color={colorLike} />
            {" icon to remove from your favorites."}
          </Text>
        </View>
        <SearchBar
          placeholder="Search locations to play"
          onChangeText={val => this.setState({ search: val })}
        />
        <FlatList
          data={data}
          extraData={{ challengePlaces, favouritePlaces }}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          style={{ flex: 1 }}
        />
        <ButtonStyled
          style={styles.btnNext}
          onPress={() => navigate({ routeName: "PlayStepThree" })}
          text={"Next".toUpperCase()}
        />
      </View>
    );
  }
}

export const FavouriteItems = connect(
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
    alignItems: "center",
    justifyContent: "space-between"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 15
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
  },
  wrapFavorite: {
    minWidth: 50,
    height: 50,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  wrapContent: {
    flexDirection: "row",
    alignItems: "center"
  },
  wrapTabText: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    marginBottom: 15
  },
  tabText: {
    fontFamily: "montserrat-medium",
    fontSize: 14,
    color: colorTextGray
  },
  btnNext: {
    marginVertical: 15
  }
});
