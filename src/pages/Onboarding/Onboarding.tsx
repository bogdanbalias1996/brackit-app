import * as React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-navigation";

import styles from "./Onboarding.styles";
import { navigate } from "../../navigationService";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";

const slides = [
  {
    key: "1",
    title: "Play",
    description:
      "improve your game by challenging your buddies and other players around you",
    imageSrc: require("../../../assets/illustration1_2x.png")
  },
  {
    key: "2",
    title: "Win",
    description:
      "earn rewards points and coins by winning wagers and make it to the top of the leaderboard",
    imageSrc: require("../../../assets/illustration2_2x.png")
  },
  {
    key: "3",
    title: "Celebrate",
    description:
      "exchange your points and coins for exclusive merchandise and badminton equipment",
    imageSrc: require("../../../assets/illustration3_2x.png")
  }
];

export class OnboardingScreen extends React.Component {
  _renderItem = item => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={item.imageSrc}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        {item.key === "3" && (
          <ButtonStyled
            style={styles.buttonStyle}
            onPress={() => this._onDone()}
            text={"Start".toUpperCase()}
          />
        )}
      </SafeAreaView>
    );
  };

  _onDone = () => {
    navigate({ routeName: "Main" });
  };

  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        slides={slides}
        showNextButton={false}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        paginationStyle={styles.paginationStyle}
        buttonStyle={{}}
      />
    );
  }
}
