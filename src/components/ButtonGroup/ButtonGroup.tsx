import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import styles from "./ButtonGroup.styles";
import { ButtonGroupProps, ButtonGroupItem } from "./";
import { colorBlueStart, colorBlueEnd } from "../../variables";

export class ButtonGroup extends React.PureComponent<ButtonGroupProps> {
  state: {
    selectedItem: ButtonGroupItem;
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedItem:
        props.items.find(
          (item: ButtonGroupItem) => item.value === props.value
        ) || props.items[0]
    };
  }

  handlePress = (item: ButtonGroupItem) => {
    this.setState({
      selectedItem: item
    });

    if (item.onPress) item.onPress();
  };

  render() {
    const {
      items,
      style = {},
      stylesFirstItem = {},
      stylesLastItem = {},
      stylesItem = {},
      stylesSelectedItem = {},
      stylesItemText = {},
      stylesSelectedItemText = {},
      getActiveIndicator = () => null
    } = this.props;

    const { selectedItem } = this.state;

    return (
      <View style={[styles.container, style]}>
        {items.map((item: ButtonGroupItem, index: number) => {
          const isFirst = index === 0;
          const isLast = index === items.length - 1;
          const isSelected = item.value === selectedItem.value;

          const stylesbuttonGroupItem = [styles.item, stylesItem]
            .concat(isFirst ? [styles.itemFirst, stylesFirstItem] : {})
            .concat(isLast ? [styles.itemLast, stylesLastItem] : {})
            .concat(
              isSelected ? [styles.itemSelected, stylesSelectedItem] : {}
            );

          const stylesbuttonGroupItemText = [
            styles.itemText,
            stylesItemText
          ].concat(
            isSelected ? [styles.itemSelectedText, stylesSelectedItemText] : {}
          );

          const content = item.component ? (
            item.component(isSelected)
          ) : (
            <React.Fragment>
              <Text style={stylesbuttonGroupItemText}>
                {item.title.toUpperCase()}
              </Text>
              {isSelected ? getActiveIndicator() : null}
            </React.Fragment>
          );
          return (
            <TouchableOpacity
              onPress={() => this.handlePress(item)}
              style={stylesbuttonGroupItem}
              key={index}
            >
              {content}
              {isSelected ? (
                <LinearGradient
                  start={[0, 0.5]}
                  end={[1, 0.5]}
                  colors={[colorBlueStart, colorBlueEnd]}
                  style={styles.underline}
                >
                  <View style={styles.underlineWhiteDot} />
                  <View style={styles.underlineDot} />
                </LinearGradient>
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
