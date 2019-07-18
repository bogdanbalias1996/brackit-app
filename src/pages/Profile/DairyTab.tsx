import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { connect } from "react-redux";

import { Icon } from "../../components/Icon/Icon";
import {
  colorTextBlue,
  colorTextGray,
  colorBorder,
  colorBlack
} from "../../variables";
import { navigate } from "../../navigationService";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export class Component extends React.PureComponent<{}> {
  state = {};

  renderItem = ({ item }) => {
    return <Text>{item.text}</Text>;
  };

  render() {
    const {} = this.props;
    const dairyList = [
      {
        id: "1",
        smile: true,
        text:
          "Today i had a great training day. I am really happy with how i played and I want to continue doing this. If i train hard, I can be the best. My coaches were very happy as well. I love badminton."
      }
    ];
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.topBlock}>
          <Text style={styles.topBlockText}>Today</Text>
          <TouchableOpacity
            onPress={() => navigate({ routeName: "DairyRecord" })}
            style={styles.recordButton}
          >
            <Icon name="edit" color={colorTextBlue} size={18} />
            <Text style={styles.recordButtonText}>
              {"Record".toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
        {dairyList.map((item, i) => {
          return (
            <View key={i} style={styles.item}>
              <View style={styles.itemLeft}>
                <Icon name="emoji" color={colorTextBlue} size={40} />
              </View>
              <Text style={styles.itemText}>{item.text}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  topBlock: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: colorBorder,
    marginBottom: 10
  },
  topBlockText: {
    fontSize: 14,
    fontFamily: "montserrat-medium",
    color: colorTextGray
  },
  recordButton: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: colorTextBlue,
    flexDirection: "row",
    alignItems: "center"
  },
  recordButtonText: {
    fontSize: 10,
    fontFamily: "montserrat-bold",
    color: colorTextBlue
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    flex: 1,
    width: "100%"
  },
  itemLeft: {
    paddingHorizontal: 10,
    paddingTop: 25
  },
  itemText: {
    fontSize: 14,
    fontFamily: "montserrat-medium",
    color: colorBlack,
    flexShrink: 1
  }
});

export const DairyTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
