import * as React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Select.styles'
import { Icon } from '../../components/Icon/Icon'
import { TouchableOpacity } from 'react-native'
import { colorWarmGrey } from '../../variables'
import { SelectOption, SelectProps, SelectOptionProps } from './'

export class Select extends React.PureComponent<SelectProps> {
  state: {
    value: string
    opened: boolean
  }

  constructor(props) {
    super(props)

    this.state = {
      value: props.value,
      opened: false
    }
  }

  toggle = () => {
    this.setState({
      opened: !this.state.opened
    })
  }

  select = (value: string) => {
    this.setState({ value })
  }

  renderOption = (option: SelectOption, props?: SelectOptionProps) => {
    const {
      preview,
      value,
      label
    } = option

    return (
      <TouchableOpacity activeOpacity={1} key={value} {...props}>
        <View style={styles.optionContent}>
          {preview && <Image style={styles.preview} source={preview} />}
          <Text style={styles.selectedValue}>{label}</Text>
        </View>
        {props && props.icon && (
          <Icon name={props.icon} color={colorWarmGrey} size={16} />
        )}
      </TouchableOpacity>
    )
  }

  render() {
    const {
      options,
      style = {},
      styleSelectedOption = {},
      styleOption = {},
      styleOptionsContainer = {},
      renderSelectedOption = undefined,
      renderOption = undefined
    } = this.props
    const { value } = this.state
    const selectedOption = options.find((option: SelectOption) => option.value === value)
    const renderSelectedOptionFunction = renderSelectedOption || this.renderOption
    const renderOptionFunction = renderOption || this.renderOption

    return (
      <View style={style}>
        {renderSelectedOptionFunction(selectedOption, {
          onPress: this.toggle,
          icon: this.state.opened ? 'up' : 'down',
          style: [styles.option, styles.selectedOption, styleSelectedOption]
        })}
        {this.state.opened && (
          <View style={[styles.selectOptionsContainer, styleOptionsContainer]}>
            {options.map((option: SelectOption, index: number) => renderOptionFunction(option, {
              onPress: () => {
                this.select(option.value)
                this.toggle()
              },
              isLast: index === options.length - 1,
              icon: selectedOption.value === option.value ? 'add' : null,
              style: [styles.option, styleOption]
            }))}
          </View>
        )}
      </View>
    )
  }
}