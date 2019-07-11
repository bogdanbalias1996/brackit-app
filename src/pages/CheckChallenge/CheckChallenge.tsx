import * as React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { SafeAreaView } from "react-navigation";
import { format } from "date-fns";

import { navigate } from "../../navigationService";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import {
  CheckChallengeScreenProps,
  CheckChallengeScreenDispatchProps
} from ".";
import { setChallengeCoins } from "./actions";
import { clearChallengeData } from "../Play/actions";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import styles from "./CheckChallenge.styles";
import { colorTextGray } from "../../variables";

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
    title={"Check info".toUpperCase()}
  />
);

const ConnectedHeader = connect(
  null,
  dispatch => ({
    clearChallengeData: () => dispatch(clearChallengeData())
  })
)(Header);

const mapStateToProps = state => ({
  challengeName: state.ChallengeState.challengeName,
  challengeUsers: state.ChallengeState.challengeUsers,
  challengePlace: state.ChallengeState.challengePlace,
  challengeDate: state.ChallengeState.challengeDate,
  challengeCoins: state.ChallengeState.challengeCoins
});
const mapDispatchToProps = (dispatch): CheckChallengeScreenDispatchProps => ({
  setChallengeCoins: (coins: string) => dispatch(setChallengeCoins(coins)),
  clearChallengeData: () => dispatch(clearChallengeData())
});

export class Component extends React.PureComponent<CheckChallengeScreenProps> {
  static navigationOptions = {
    header: props => <ConnectedHeader {...props} />
  };

  render() {
    const {
      challengeName,
      challengeUsers,
      challengePlace,
      challengeDate,
      challengeCoins
    } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={() => navigate({ routeName: "PlayStepOne" })}
            style={styles.item}
          >
            <View>
              <Text style={styles.title}>challenge title</Text>
              <Text style={styles.text}>{challengeName}</Text>
            </View>
            <Icon size={18} name="edit" color={colorTextGray} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate({ routeName: "PlayStepTwo" })}
            style={styles.item}
          >
            <View style={{ maxWidth: "85%", overflow: "hidden" }}>
              <Text style={styles.title}>who</Text>
              <View style={styles.wrapAvatars}>
                {challengeUsers.map(item => (
                  <Image
                    key={item.id}
                    style={styles.avatar}
                    source={item.avatar}
                    resizeMode="cover"
                  />
                ))}
              </View>
            </View>
            <Icon size={18} name="edit" color={colorTextGray} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate({ routeName: "PlayStepThree" })}
            style={styles.item}
          >
            <View>
              <Text style={styles.title}>where</Text>
              <View style={styles.wrapLocations}>
                <Image
                  style={styles.avatarLocation}
                  source={challengePlace.avatar}
                  resizeMode="cover"
                />
                <View>
                  <Text style={styles.text}>{challengePlace.title}</Text>
                  <Text style={[styles.title, { marginBottom: 0 }]}>
                    {challengePlace.text}
                  </Text>
                </View>
              </View>
            </View>
            <Icon size={18} name="edit" color={colorTextGray} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate({ routeName: "PlayStepFour" })}
            style={styles.item}
          >
            <View>
              <Text style={styles.title}>when</Text>
              <Text style={styles.text}>
                {format(challengeDate, "D MMMM, HH:mm a")}
              </Text>
            </View>
            <Icon size={18} name="edit" color={colorTextGray} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate({ routeName: "PlayStepFive" })}
            style={styles.item}
          >
            <View>
              <Text style={styles.title}>challenge title</Text>
              <View style={styles.wrapCoins}>
                <Image
                  style={styles.coinImage}
                  source={require("../../../assets/coin-color.png")}
                  resizeMode="cover"
                />
                <Text style={styles.text}>{challengeCoins + " coins"}</Text>
              </View>
            </View>
            <Icon size={18} name="edit" color={colorTextGray} />
          </TouchableOpacity>
        </View>
        <ButtonStyled
          style={styles.btnNext}
          onPress={() => {}}
          text={"Post challenge".toUpperCase()}
        />
      </SafeAreaView>
    );
  }
}

export const CheckChallengeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
