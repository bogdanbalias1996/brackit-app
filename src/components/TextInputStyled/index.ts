import { TextInputProps } from 'react-native'
import { FormikProps } from 'formik'

export interface TextInputStyledProps extends TextInputProps {
  iconName?: string
  name: string
  label?: string
  formProps: FormikProps<any>
  secure?: boolean
  borderTop?: boolean
  handleIconClick?: Function
  type?: string
}
