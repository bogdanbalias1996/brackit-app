import * as React from "react";
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import { Icon } from "../Icon/Icon";
import { TextInputStyledProps } from ".";
import styles from "./TextInputStyled.styles";
import { colorTextGray } from "../../variables";

export const TextInputIconStyled: React.SFC<TextInputStyledProps> = (
  props
): JSX.Element => {
  const {
    iconName,
    name,
    label,
    formProps,
    secure,
    borderTop,
    handleIconClick = () => {},
    ...TextInputProps
  } = props;

  const { handleChange, setFieldTouched, values, errors, touched } = formProps;

  const value = values[name];
  const error = errors[name];
  const elIsTouched = touched[name];
  return (
    <View
      style={[
        styles.container,
        error && elIsTouched ? styles.error : null,
        borderTop && { borderTopWidth: 1 },
        styles.containerWithLabel
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        {iconName && (
          <Icon
            size={15}
            name={iconName}
            color={colorTextGray}
            style={{ marginRight: 10 }}
          />
        )}
        <Text style={styles.labelIconStyle}>{label}</Text>
      </View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        value={value}
        onChangeText={handleChange(name)}
        onBlur={() => value && setFieldTouched(name)}
        autoCorrect={false}
        {...TextInputProps}
      />
    </View>
  );
};
