import * as React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import { colorCoolGrey, colorTomato } from '../../variables'

export type TextAreaProps = {
  style?: any
  limit: number
  placeholder: string
  error?: string
  onChange?: Function
  value: string
}

export class TextArea extends React.PureComponent<TextAreaProps> {
  state: {
    text: string
  }

  constructor(props) {
    super(props)

    this.state = {
      text: props.value || ''
    }
  }

  render() {
    const {
      style,
      limit = 0,
      placeholder,
      error,
      onChange
    } = this.props

    const { text } = this.state

    return (
      <View style={[styles.container, style, error ? styles.error : {}]}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          numberOfLines={4}
          placeholder={placeholder}
          placeholderTextColor={colorCoolGrey}
          autoCorrect={false}
          onChangeText={(text) => {
            if (text.length <= limit) {
              this.setState({ text })
              onChange(text)
            }

          }}
          value={text}
        />
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>{text.length}/{limit}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 12,
    paddingLeft: 16,
    paddingRight: 16
  },
  textInput: {
    height: 80,
    fontSize: 12,
    fontFamily: 'poppins-medium',
    color: colorCoolGrey
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  counterText: {
    fontSize: 12,
    color: colorCoolGrey,
    fontFamily: 'poppins',
  },
  error: {
    borderWidth: 1,
    borderColor: colorTomato,
    borderBottomColor: colorTomato
  }
})