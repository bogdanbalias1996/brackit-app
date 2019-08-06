import * as React from "react";
import { TouchableOpacity, Text, View, Image, FlatList } from "react-native";
import { LinearGradient } from "expo";
import Modal from "react-native-modal";

import { Icon } from "../../components/Icon/Icon";
import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { ModalCoinsProps } from "./";
import styles from "./ModalCoins.styles";
import { colorYellowEnd, colorYellowStart } from "../../variables";

const coinList = [
  {
    image: require("../../../assets/coin2.png"),
    coin: 10,
    prize: 500,
    size: 40
  },
  {
    image: require("../../../assets/coin3.png"),
    coin: 20,
    prize: 1000,
    size: 50
  },
  {
    image: require("../../../assets/coin4.png"),
    coin: 50,
    prize: 2500,
    size: 55
  },
  {
    image: require("../../../assets/coin5.png"),
    coin: 80,
    prize: 4000,
    size: 60
  },
  {
    image: require("../../../assets/coin6.png"),
    coin: 100,
    prize: 5000,
    size: 60
  }
];

export const ModalCoins: React.SFC<ModalCoinsProps> = ({
  onClose,
  visible = false
}): JSX.Element => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <Image
            style={{ width: item.size, height: item.size }}
            source={item.image}
            resizeMode="contain"
          />
          <Text style={styles.itemCoinText}>{item.coin}</Text>
        </View>
        <View style={styles.itemRight}>
          <ButtonStyled
            onPress={() => alert("ok")}
            text={item.prize + " INR"}
          />
        </View>
      </View>
    );
  };

  return (
    <Modal
      isVisible={visible}
      style={{ margin: 0 }}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
    >
      <View style={styles.modalWrap}>
        <TouchableOpacity style={styles.closeWrap} onPress={onClose}>
          <Icon size={30} name="cancel" color="white" />
          <Text style={styles.closeWrapText}>{"Top Up".toUpperCase()}</Text>
        </TouchableOpacity>
        <View style={styles.headerCoins}>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../../../assets/coin-color.png")}
            resizeMode="contain"
          />
          <View style={styles.headerCoinsContent}>
            <Text style={styles.headerCoinsCoins}>you have</Text>
            <Text style={styles.headerCoinsText}>100 coins</Text>
          </View>
        </View>
        <LinearGradient
          style={styles.wrapList}
          colors={[colorYellowStart, colorYellowEnd]}
        >
          <FlatList
            data={coinList}
            renderItem={renderItem}
            keyExtractor={(item, i) => i.toString()}
            style={{ flex: 1 }}
          />
        </LinearGradient>
      </View>
    </Modal>
  );
};
