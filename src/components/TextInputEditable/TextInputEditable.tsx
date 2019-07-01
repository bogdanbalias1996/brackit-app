import * as React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from '../../components/Icon/Icon'
import { colorCoolGrey, colorDarkGrey } from '../../variables'

export type TextInputEditableProps = {
  style?: any
  text: string
}

export class TextInputEditable extends React.PureComponent<TextInputEditableProps> {
  state: {
    isEditable: boolean,
    text: string
  }

  constructor(props) {
    super(props)

    this.state = {
      isEditable: false,
      text: props.text || ''
    }
  }

  render() {
    const {
      isEditable,
      text
    } = this.state
    const { style = {} } = this.props

    return (
      <View style={[styles.container, style]}>
        {
          isEditable
            ? (
              <TextInput
                style={styles.textBlock}
                value={text}
                onChangeText={(changedText) => { this.setState({ text: changedText }) }}
                autoCorrect={false}
              />
            )
            : <Text style={styles.textBlock}>{text}</Text>
        }

        <TouchableOpacity onPress={() => {
          this.setState({ isEditable: !isEditable })
        }}>
          <Icon name={isEditable ? "check" : "edit"} color={colorCoolGrey} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textBlock: {
    flexGrow: 1,
    fontFamily: 'poppins-semi-bold',
    fontSize: 20,
    color: colorDarkGrey
  }
})