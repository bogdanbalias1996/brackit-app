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
import { setChallengePlace, setFavouritePlaces } from "./actions";
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
  challengePlace: state.ChallengeState.challengePlace,
  favouritePlaces: state.ChallengeState.favouritePlaces
});
const mapDispatchToProps = (dispatch): PlayStepThreeScreenDispatchProps => ({
  setChallengePlace: (place: string) => dispatch(setChallengePlace(place)),
  setFavouritePlaces: (place: string) => dispatch(setFavouritePlaces(place))
});

export class Component extends React.PureComponent<PlayStepThreeScreenProps> {
  renderItem = ({ item }) => {
    const {
      challengePlace,
      favouritePlaces,
      setChallengePlace,
      setFavouritePlaces
    } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          setChallengePlace(item);
        }}
        style={styles.card}
      >
        <View style={styles.wrapContent}>
          <View style={styles.avatarWrap}>
            <Image
              style={[
                styles.avatar,
                { opacity: this.ifExist(challengePlace, item) ? 0.5 : 1 }
              ]}
              source={item.avatar}
              resizeMode="cover"
            />
            {this.ifExist(challengePlace, item) ? (
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
                  color: this.ifExist(challengePlace, item)
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
          onPress={() => setFavouritePlaces(item)}
        >
          <Icon
            size={24}
            name="favorite"
            color={
              this.ifExistInArray(favouritePlaces, item)
                ? colorLike
                : colorTextGray
            }
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  ifExist = (obj1, obj): any => {
    if (obj1.id === obj.id) {
      return true;
    }
  };

  ifExistInArray = (array, obj): any => {
    if (array.find(x => x.id === obj.id)) {
      return true;
    }
  };

  render() {
    const { challengePlace, favouritePlaces } = this.props;

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
          data={favouritePlaces}
          extraData={{ challengePlace }}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          style={{ flex: 1 }}
        />
        <View style={{ opacity: Object.keys(challengePlace).length ? 1 : 0.2 }}>
          <ButtonStyled
            style={styles.btnNext}
            onPress={() =>
              Object.keys(challengePlace).length &&
              navigate({ routeName: "PlayStepFour" })
            }
            text={"Next".toUpperCase()}
          />
        </View>
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
