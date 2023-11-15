import * as React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Icon } from "../Icon/Icon";
import { TextInputStyledProps } from ".";
import styles from "./TextInputStyled.styles";
import { colorTextGray } from "../../variables";

var FloatingLabel = require("react-native-floating-labels");

export const TextInputStyled: React.SFC<TextInputStyledProps> = (
  props
): JSX.Element => {
  const {
    iconName,
    name,
    label,
    type,
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
        borderTop && { borderTopWidth: 1 }
      ]}
    >
      <FloatingLabel
        labelStyle={styles.labelStyle}
        inputStyle={[
          styles.inputStyle,
          { height: type === "textarea" ? 70 : 32 }
        ]}
        style={styles.input}
        autoCapitalize="none"
        value={value}
        onChangeText={handleChange(name)}
        onBlur={() => value && setFieldTouched(name)}
        autoCorrect={false}
        {...TextInputProps}
        secureTextEntry={secure}
        password={secure}
      >
        {label}
      </FloatingLabel>
      {iconName && (
        <TouchableOpacity onPress={() => handleIconClick && handleIconClick()}>
          <Icon size={27} name={iconName} color={colorTextGray} />
        </TouchableOpacity>
      )}
    </View>
  );
};
