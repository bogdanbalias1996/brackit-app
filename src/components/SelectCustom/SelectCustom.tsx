import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Platform
} from "react-native";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

import { Icon } from "../../components/Icon/Icon";
import { SelectCustomProps } from "./";
import {
  colorShadow,
  colorBlack,
  colorGradientBlue,
  colorGradientGreen,
  colorBorder
} from "../../variables";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

const selectData = [
  {
    id: "1",
    label: "This week"
  },
  {
    id: "2",
    label: "This month"
  },
  {
    id: "3",
    label: "This year"
  }
];

export class Component extends React.PureComponent<SelectCustomProps> {
  state = {
    modalVisible: false,
    selectedValue: selectData[0].label
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}
          style={styles.select}
        >
          <LinearGradient
            start={[0, 0.5]}
            end={[1, 0.5]}
            colors={[colorGradientBlue, colorGradientGreen]}
            style={styles.selectLeft}
          >
            <Text style={styles.selectText}>
              {this.state.selectedValue.toUpperCase()}
            </Text>
          </LinearGradient>
          <View style={styles.selectRight}>
            <Icon size={16} name="down" />
          </View>
        </TouchableOpacity>
        <Modal
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
            style={styles.selectWrapper}
          >
            <View style={styles.selectWrap}>
              {selectData.map((item, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => {
                      this.setState({ selectedValue: item.label });
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                    style={[
                      styles.selectItem,
                      { borderBottomWidth: i === 2 ? 0 : 1 }
                    ]}
                  >
                    <Text style={styles.selectItemText}>{item.label}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

export const SelectCustom = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

const styles = StyleSheet.create({
  select: {
    flexDirection: "row",
    shadowColor: colorShadow,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 20
  },
  selectLeft: {
    height: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 100
  },
  selectRight: {
    backgroundColor: colorGradientGreen,
    height: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 2,
    paddingHorizontal: 5
  },
  selectText: {
    fontSize: 11,
    fontFamily: "montserrat-bold",
    color: "white"
  },
  selectWrap: {
    position: "absolute",
    top: Platform.OS === "android" ? 260 : 285,
    right: 25,
    backgroundColor: "white",
    width: 125,
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: colorShadow,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 20
  },
  selectWrapper: {
    flex: 1
  },
  selectItem: {
    paddingVertical: 10,
    borderColor: colorBorder,
    borderBottomWidth: 1
  },
  selectItemText: {
    fontSize: 14,
    fontFamily: "montserrat-medium",
    color: colorBlack,
    textAlign: "center"
  }
});
