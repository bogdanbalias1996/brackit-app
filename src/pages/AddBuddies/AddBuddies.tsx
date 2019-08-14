import * as React from "react";
import { connect } from "react-redux";
import { Text, View, SafeAreaView, FlatList, Image } from "react-native";

import { AddBuddiesScreenProps } from ".";
import { IGlobalState } from "../../coreTypes";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import styles from "./AddBuddies.styles";
import { navigate } from "../../navigationService";

const Header = props => (
  <HeaderRounded
    {...props}
    getLeftComponent={() => {}}
    title={"Add Buddies".toUpperCase()}
    getRightComponent={() => {}}
  />
);

const mapStateToProps = (state: IGlobalState) => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<AddBuddiesScreenProps> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  state: {
    search: "";
  };

  onSubmit = () => {
    navigate({ routeName: "Profile" });
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.itemWrap}>
        <View style={styles.itemLeft}>
          <Image
            style={styles.avatar}
            source={item.avatar}
            resizeMode="cover"
          />
          <View>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemLocation}>{item.location}</Text>
          </View>
        </View>
        <View style={styles.itemRight}>
          <ButtonStyled
            onPress={() => alert("ok")}
            text={"+ Buddy".toUpperCase()}
          />
        </View>
      </View>
    );
  };

  render() {
    const dataBuddies = [
      {
        id: "1",
        name: "Huo Shu",
        location: "JP Nagar Bagaluru, Ind",
        avatar: require("../../../assets/avatar.png")
      },
      {
        id: "2",
        name: "Huo Shu",
        location: "JP Nagar Bagaluru, Ind",
        avatar: require("../../../assets/avatar.png")
      },
      {
        id: "3",
        name: "Huo Shu",
        location: "JP Nagar Bagaluru, Ind",
        avatar: require("../../../assets/avatar.png")
      }
    ];
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={styles.wrapSearch}>
            <SearchBar
              placeholder="Search for players"
              onChangeText={val => this.setState({ search: val })}
            />
          </View>
          <Text style={styles.title}>
            {"Recommended buddies".toUpperCase()}
          </Text>
          <FlatList
            data={dataBuddies}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            style={{ flex: 1 }}
          />
        </View>
        <View>
          <ButtonStyled
            onPress={() => this.onSubmit()}
            style={styles.btnSubmit}
            text={"Done".toUpperCase()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export const AddBuddiesScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
