import * as React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import { HeaderRounded } from '../../components/HeaderRounded/HeaderRounded'
import { colorLightBlue, colorCoolGrey, colorBlueberry, colorBlueyGrey, colorTomato, colorCoral } from '../../variables'
import { TextArea } from '../../components/TextArea/TextArea'
import { Tabs } from '../../components/Tabs/Tabs'
import { Icon } from '../../components/Icon/Icon'
import { Select } from '../../components/Select/Select'
import { Formik } from 'formik'
import { navigate, goBack } from '../../navigationService'

const renderMenuItem = (title: string, iconName: string, isActive?: boolean): JSX.Element => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Icon style={styles.topLineIcon} name={iconName} color={isActive ? 'white' : colorBlueyGrey} />
      <Text style={[styles.topLineText, isActive ? styles.topLineTextSelected : {}]}>{title}</Text>
    </View>
  )
}

const validate = (values) => {
  let errors: any = {}

  if (!values.comment) {
    errors.comment = 'Required'
  }

  if (!values.link) {
    errors.link = 'Required'
  }

  return errors
};

export class CreateAnIssueScreen extends React.PureComponent<{}> {
  static navigationOptions = {
    header: (props) => <HeaderRounded {...props} style={{ backgroundColor: colorLightBlue }} title="Create An Issue" />
  }

  state: {
    imagePreview: string | null
    imageId: string
  }
  selectedImage: any

  constructor(props) {
    super(props)

    this.state = {
      imagePreview: null,
      imageId: ''
    }
  }

  selectImage = (selectedImage) => {
    this.selectedImage = selectedImage
  }

  doneImageSelection = () => {
    if (this.selectedImage) {
      const { uri, id } = this.selectedImage

      this.setState({
        imagePreview: uri,
        imageId: id
      })
    }
  }

  render() {
    const tabsConfig = [
      {
        titleComponent: (isActive) => renderMenuItem('Party', 'parties', isActive),
        component: () => (
          <Select options={[
            { label: 'Select party', value: '' },
            { label: 'Party 1', value: '1' },
            { label: 'Party 2', value: '2' },
          ]}
            value={''}
          />
        )
      },
      {
        titleComponent: (isActive) => renderMenuItem('Politician', 'politicians', isActive),
        component: () => (
          <Select options={[
            { label: 'Select politician', value: '' },
            { label: 'Politician 1', value: '1' },
            { label: 'Politician 2', value: '2' },
          ]}
            value={''}
          />
        )
      },
      {
        titleComponent: (isActive) => renderMenuItem('Bill', 'bills', isActive),
        component: () => (
          <Select options={[
            { label: 'Select bill', value: '' },
            { label: 'Bill 1', value: '1' },
            { label: 'Bill 2', value: '2' },
          ]}
            value={''}
          />
        )
      }
    ]

    const { imagePreview, imageId } = this.state

    return (
      <SafeAreaView style={styles.container}>
        <Formik
          initialValues={{
            comment: '',
            link: ''
          }}
          validate={validate}
          onSubmit={(values) => {
            goBack()
          }}
        >
          {(props: any) => {
            const { errors, submitForm, setFieldValue, setFieldError } = props
            const commentError = errors['comment']
            const linkError = errors['link']
            const handleFieldChange = (fieldName: string, text: string) => {
              setFieldValue(fieldName, text, false)
              setFieldError(fieldName, text.length === 0 ? 'It is mandatory field' : '')
            }

            return (
              <React.Fragment>
                <View style={styles.content}>
                  <TextArea
                    placeholder="What’s on your mind?"
                    limit={200}
                    error={commentError}
                    onChange={(text) => {
                      handleFieldChange('comment', text)
                    }}
                    value={props.values['comment']}
                  />
                  {!!commentError && <Text style={styles.errorText}>{commentError}</Text>}
                  <View style={[
                    styles.textWithIconContainer,
                    linkError ? styles.linkError : {}
                  ]}>
                    <Icon name="link" color={colorCoolGrey} />
                    <TextInput
                      style={[styles.text, styles.textWithIconContainerText]}
                      placeholder="Insert link"
                      autoCapitalize='none'
                      autoCorrect={false}
                      underlineColorAndroid={'rgba(0,0,0,0)'}
                      placeholderTextColor={colorCoolGrey}
                      onChangeText={(text) => {
                        handleFieldChange('link', text)
                      }}
                      value={props.values['link']}
                    />
                  </View>
                  {!!linkError && <Text style={styles.errorText}>It is mandatory field</Text>}

                  {!!imagePreview && <Image style={styles.imagePreview} source={{ uri: imagePreview }} />}
                  <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} onPress={() => {
                      navigate({
                        routeName: 'ChooseImage',
                        params: {
                          selectImage: this.selectImage,
                          imageId,
                          doneImageSelection: this.doneImageSelection
                        }
                      })
                    }}>
                      <Icon name="photo" size={20} />
                      <Text style={[styles.text, styles.btnText]}>
                        {imagePreview ? 'Change photo' : 'Attach photo'}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.issueContainer}>
                    <Text style={[styles.text, styles.issueContainerTitle]}>What is you issue related to </Text>
                    <Tabs
                      config={tabsConfig}
                      stylesTabsContainer={{
                        marginBottom: 8
                      }}
                    />
                  </View>
                </View>

                <TouchableOpacity style={styles.btnSubmit} onPress={() => submitForm()}>
                  <Text style={styles.btnSubmitText}>Post</Text>
                </TouchableOpacity>
              </React.Fragment>
            )
          }
          }
        </Formik>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorLightBlue,
    flex: 1,
    justifyContent: 'space-between'
  },
  content: {
    marginLeft: 8,
    marginRight: 8,
    marginTop: 12
  },
  textWithIconContainer: {
    flexDirection: 'row',
    borderRadius: 4,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    marginTop: 4,
    padding: 16,
    paddingTop: 12,
    paddingBottom: 12
  },
  textWithIconContainerText: {
    flex: 1,
    paddingLeft: 8,
    color: colorCoolGrey
  },
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  btn: {
    backgroundColor: colorBlueberry,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    paddingTop: 7,
    paddingBottom: 7,
    marginTop: 8
  },
  btnText: {
    marginLeft: 3
  },
  imagePreview: {
    width: 126,
    height: 126,
    borderRadius: 4,
    marginTop: 8
  },
  text: {
    fontSize: 12,
    fontFamily: 'poppins-medium',
    color: 'white'
  },
  issueContainer: {
    marginTop: 24
  },
  issueContainerTitle: {
    color: colorBlueyGrey
  },
  topLineText: {
    color: colorCoolGrey,
    fontSize: 12,
    fontFamily: 'poppins-medium'
  },
  topLineTextSelected: {
    color: 'white'
  },
  topLineIcon: {
    marginRight: 8
  },
  btnSubmit: {
    backgroundColor: colorBlueberry,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnSubmitText: {
    color: 'white',
    fontFamily: 'poppins-semi-bold',
    fontSize: 16,
    padding: 13
  },
  linkError: {
    borderWidth: 1,
    borderColor: colorTomato,
    borderBottomColor: colorTomato
  },
  errorText: {
    fontSize: 12,
    color: colorCoral,
    marginTop: 4
  }
})