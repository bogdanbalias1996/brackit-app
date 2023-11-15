import * as React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { format } from "date-fns";

import { TournamentItem } from "./";
import { Icon } from "../../components/Icon/Icon";
import { colorLightGreyBlue, colorBlueStart } from "../../variables";
import { navigate } from "../../navigationService";
import { getTournamentList } from "./actions";
import styles from "./TournamentItem.styles";

const mapStateToProps = state => ({
  tournamentList: state.ChallengeState.tournamentList,
  page: state.ChallengeState.page
});
const mapDispatchToProps = dispatch => ({
  getTournamentList: (page: any) => dispatch(getTournamentList(page) as any)
});

export class Component extends React.PureComponent<{
  data: any;
  getTournamentList: (page: any) => Promise<any>;
  tournamentList: any;
  page: number;
}> {
  componentDidMount() {
    const { getTournamentList, tournamentList, page } = this.props;

    !tournamentList.length && getTournamentList(page);
  }

  renderItem = ({ item }) => {
    const {
      currency,
      endDate,
      entries,
      events,
      grade,
      gradeColorCode,
      players,
      prizeMoney,
      startDate,
      title,
      tournamentLoc
    } = item as TournamentItem;

    const eventsArr = events ? events.split(",") : [];

    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            navigate({
              routeName: "TournamentDetail",
              params: { tournamentData: item }
            })
          }
          style={styles.card}
        >
          <View
            style={[
              styles.triangleShape,
              {
                borderLeftColor: gradeColorCode ? gradeColorCode : "white",
                borderRightColor: gradeColorCode ? gradeColorCode : "white"
              }
            ]}
          />
          <View style={styles.wrapTopContent}>
            <Text
              style={[
                styles.status,
                { color: gradeColorCode ? gradeColorCode : "white" }
              ]}
            >
              {grade ? grade.toUpperCase() : ""}
            </Text>
            <View style={styles.wrapEntries}>
              <View style={styles.entry}>
                <Image
                  style={{ width: 20 }}
                  source={require("../../../assets/court.png")}
                  resizeMode="contain"
                />
                <Text style={styles.entryText}>{entries ? entries : 0}</Text>
              </View>
              <View style={styles.entry}>
                <Image
                  style={{ width: 20 }}
                  source={require("../../../assets/player.png")}
                  resizeMode="contain"
                />
                <Text style={styles.entryText}>{players ? players : 0}</Text>
              </View>
            </View>
          </View>
          <Text style={styles.cardTitle}>{title ? title : ""}</Text>
          <View style={styles.questionItem}>
            <Icon
              size={16}
              style={styles.questionIcon}
              name="location"
              color={colorLightGreyBlue}
            />
            <Text style={styles.answerText}>
              {tournamentLoc ? tournamentLoc : ""}
            </Text>
          </View>
          <View style={styles.questionItem}>
            <Icon
              size={16}
              style={styles.questionIcon}
              name="calendar"
              color={colorLightGreyBlue}
            />
            <Text style={styles.answerText}>
              {startDate ? format(new Date(startDate), "dd MMMM, yyyy") : ""}
              {endDate
                ? " - " + format(new Date(endDate), "dd MMMM, yyyy")
                : ""}
            </Text>
          </View>
          <View style={styles.questionItem}>
            <Icon
              size={16}
              style={styles.questionIcon}
              name="cup"
              color={colorLightGreyBlue}
            />
            <Text style={styles.qestionText}>prize money</Text>
            <Text style={styles.entryFeeText}>
              {currency ? prizeMoney + " " + currency : ""}
            </Text>
          </View>
          <View style={styles.eventsItem}>
            <Text style={styles.qestionText}>events</Text>
            <View style={styles.categoriesWrap}>
              {eventsArr.map((item, i) => {
                return (
                  <View key={i} style={styles.categoryItem}>
                    <Text style={styles.categoryItemText}>{item}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  paginationFunc = () => {
    const { getTournamentList, page } = this.props;
    console.log("page", page);
    let newpage = page + 1;

    getTournamentList(newpage);
  };

  render() {
    const { tournamentList } = this.props;
    return tournamentList.length ? (
      <FlatList
        data={tournamentList}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => this.paginationFunc()}
        onEndReachedThreshold={0.1}
      />
    ) : (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator
          size="large"
          color={colorBlueStart}
          style={{ alignSelf: "center" }}
        />
      </View>
    );
  }
}

export const TournamentItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
