import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";
import { connect } from "react-redux";
import { TournamentDetailScreenProps } from "./";

import { ButtonStyled } from "../../components/ButtonStyled/ButtonStyled";
import {
  colorBorder,
  colorTextGray,
  colorBlack,
  colorGradientBlue,
  colorOrangeText
} from "../../variables";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<
  TournamentDetailScreenProps
> {
  state = {
    events: this.props.events,
    showPartner: false,
    partner: ""
  };

  setActiveEvent = item => {
    const { events } = this.state;

    this.setState({
      events: events.map(event => {
        if (item.id === event.id) {
          event.selected = !event.selected;
        }
        return event;
      })
    });
  };

  render() {
    const { name, academy, entryFee, totalEntryFee } = this.props;
    const { events, showPartner, partner } = this.state;
    return (
      <ScrollView>
        <View style={styles.item}>
          <Text style={styles.title}>name</Text>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>academy</Text>
          <Text style={styles.text}>{academy}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>events</Text>
          <View style={styles.eventsWrap}>
            {events.map((item, i) => {
              return (
                <TouchableOpacity
                  onPress={() => this.setActiveEvent(item)}
                  key={i}
                  style={[
                    styles.eventItem,
                    {
                      backgroundColor: item.selected
                        ? colorGradientBlue
                        : "white"
                    }
                  ]}
                >
                  <Text
                    style={[
                      styles.eventItemText,
                      { color: item.selected ? "white" : colorBlack }
                    ]}
                  >
                    {item.value}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        {events.find(x => x.double && x.selected) && (
          <View style={styles.item}>
            <Text style={styles.title}>doubles partner name</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              placeholder="Enter partner name"
              value={partner}
              onChangeText={value => this.setState({ partner: value })}
            />
          </View>
        )}
        <View style={styles.item}>
          <Text style={styles.title}>name</Text>
          <View style={styles.wrapCoins}>
            <Image
              style={styles.coinImage}
              source={require("../../../assets/coin-color.png")}
              resizeMode="cover"
            />
            <Text style={styles.coinText}>{entryFee + " coins"}</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>name</Text>
          <View style={styles.wrapCoins}>
            <Image
              style={styles.coinImage}
              source={require("../../../assets/coin-color.png")}
              resizeMode="cover"
            />
            <Text style={styles.coinText}>{totalEntryFee + " coins"}</Text>
          </View>
        </View>
        <ButtonStyled
          style={styles.button}
          onPress={() => alert("ok")}
          text={"Register".toUpperCase()}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: colorBorder
  },
  title: {
    fontSize: 12,
    fontFamily: "montserrat-medium",
    color: colorTextGray,
    marginBottom: 10
  },
  text: {
    fontSize: 14,
    fontFamily: "montserrat-semibold",
    color: colorBlack
  },
  eventsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5
  },
  eventItem: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colorGradientBlue,
    marginRight: 5,
    marginBottom: 5
  },
  eventItemText: {
    fontSize: 10,
    fontFamily: "montserrat-bold",
    color: colorBlack
  },
  wrapCoins: {
    flexDirection: "row",
    alignItems: "center"
  },
  coinImage: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  coinText: {
    color: colorOrangeText
  },
  input: {
    fontSize: 14,
    color: colorBlack
  },
  button: {
    marginVertical: 25
  }
});

export const RegisterTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
