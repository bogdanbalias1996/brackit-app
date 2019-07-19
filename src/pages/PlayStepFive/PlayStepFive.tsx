import * as React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { SafeAreaView } from "react-navigation";
import { LinearGradient } from "expo";
import ModalSelector from "react-native-modal-selector";

import { clearChallengeData } from "../Play/actions";
import { navigate } from "../../navigationService";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { PlayStepFiveScreenProps, PlayStepFiveScreenDispatchProps } from ".";
import { setChallengeCoins } from "./actions";
import { HeaderRounded } from "../../components/HeaderRounded/HeaderRounded";
import { Icon } from "../../components/Icon/Icon";
import styles from "./PlayStepFive.styles";
import { colorGradientBlue, colorGradientGreen } from "../../variables";

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
    title={"Choose wager".toUpperCase()}
    getRightComponent={() => {
      return (
        <Text style={styles.headerRightText}>{"Step 5/5".toUpperCase()}</Text>
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
  challengeCoins: state.ChallengeState.challengeCoins
});
const mapDispatchToProps = (dispatch): PlayStepFiveScreenDispatchProps => ({
  setChallengeCoins: (coins: string) => dispatch(setChallengeCoins(coins)),
  clearChallengeData: () => dispatch(clearChallengeData())
});

export class Component extends React.PureComponent<PlayStepFiveScreenProps> {
  static navigationOptions = {
    header: props => <ConnectedHeader {...props} />
  };

  state = {
    coinValue: ""
  };

  render() {
    const { setChallengeCoins, challengeCoins } = this.props;
    const data = [
      { key: 1, label: "1" },
      { key: 2, label: "2" },
      { key: 3, label: "3" },
      { key: 4, label: "4" },
      { key: 5, label: "5" },
      { key: 6, label: "6" },
      { key: 7, label: "7" },
      { key: 8, label: "8" },
      { key: 9, label: "9" },
      { key: 10, label: "10" },
      { key: 11, label: "11" },
      { key: 12, label: "12" },
      { key: 13, label: "13" },
      { key: 14, label: "14" },
      { key: 15, label: "15" },
      { key: 16, label: "16" },
      { key: 17, label: "17" },
      { key: 18, label: "18" }
    ];

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topContent}>
          <View style={styles.wrapCoinBlock}>
            <View style={styles.wrapCoin}>
              <Image
                style={styles.image}
                source={require("../../../assets/coin-color.png")}
                resizeMode="contain"
              />
              <View>
                <Text style={styles.text}>you have</Text>
                <Text style={styles.textOrange}>100 coins</Text>
              </View>
            </View>
            <ButtonStyled
              color="gold"
              shadow={false}
              onPress={() => {}}
              text={"Top up".toUpperCase()}
            />
          </View>
          <Text style={styles.text}>
            How many coins do you want to wager (bet) for the challenge.
          </Text>
          <TouchableOpacity style={styles.linkWrap} onPress={() => alert("ok")}>
            <LinearGradient
              start={[0, 0.5]}
              end={[1, 0.5]}
              colors={[colorGradientBlue, colorGradientGreen]}
              style={styles.icon}
            >
              <Text style={styles.iconText}>i</Text>
            </LinearGradient>
            <Text style={styles.linkText}>
              Wager more coins to get more proposals.
            </Text>
          </TouchableOpacity>
        </View>
        <ModalSelector
          data={data}
          initValue={challengeCoins.length ? challengeCoins : "0"}
          onChange={option => {
            this.setState({ coinValue: option.label });
            setChallengeCoins(option.label);
          }}
          cancelStyle={styles.modalCancelStyle}
          overlayStyle={styles.modalOverlayStyle}
          cancelTextStyle={styles.modalCancelTextStyle}
          optionContainerStyle={styles.modalOptionContainer}
          optionTextStyle={styles.modalOptionTextStyle}
          cancelText="Cancel"
        />
        <View style={{ opacity: challengeCoins.length ? 1 : 0.2 }}>
          <ButtonStyled
            style={styles.btnNext}
            onPress={() => {
              challengeCoins.length &&
                navigate({ routeName: "CheckChallenge" });
            }}
            text={"Next".toUpperCase()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export const PlayStepFiveScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
