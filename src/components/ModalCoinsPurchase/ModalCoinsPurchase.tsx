import * as React from "react";
import { Text, View, Image } from "react-native";
import { LinearGradient } from "expo";
import Modal from "react-native-modal";

import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import { ModalCoinsPurchaseProps } from "./";
import styles from "./ModalCoinsPurchase.styles";
import { colorYellowEnd, colorYellowStart } from "../../variables";

export const ModalCoinsPurchase: React.SFC<ModalCoinsPurchaseProps> = ({
  onClose,
  visible = false
}): JSX.Element => {
  return (
    <Modal
      isVisible={visible}
      style={{ margin: 0 }}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
    >
      <View style={styles.modalWrap}>
        <View style={styles.wrapListShadow}>
          <LinearGradient
            style={styles.wrapList}
            colors={[colorYellowStart, colorYellowEnd]}
          >
            <View style={styles.wrapCoins}>
              <View style={styles.wrapImage}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require("../../../assets/coin-color.png")}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.wrapCoinsText}>
                <Text style={styles.coinsText}>120</Text>
              </View>
            </View>
            <Text style={styles.purchaseText}>
              {"Have fun with your purchase!".toUpperCase()}
            </Text>
            <ButtonStyled onPress={onClose} text={"Continue".toUpperCase()} />
          </LinearGradient>
        </View>
      </View>
    </Modal>
  );
};
