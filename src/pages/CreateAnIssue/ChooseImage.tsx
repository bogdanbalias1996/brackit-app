import * as React from 'react'
import {
  View,
  Text,
  CameraRoll,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  GetPhotosReturnType
} from 'react-native'
import { HeaderRounded } from '../../components/HeaderRounded/HeaderRounded'
import { colorLightBlue, colorBlueberry, colorBlueyGrey } from '../../variables'
import { Permissions, ImagePicker, ImageResult } from 'expo'
import { goBack } from '../../navigationService'
import { Icon } from '../../components/Icon/Icon'
import get from 'lodash.get'

const { width } = Dimensions.get('window')
const itemSize = (width - 16) / 3

const getIdFromImageUri = (uri: string) => {
  const regExpUriId = new RegExp('id=(.*?)&', 'g')
  const [id = ''] = uri.match(regExpUriId) || []

  return id.replace('id=', '').replace('&', '')
}

export class ChooseImageScreen extends React.PureComponent<{}> {
  static navigationOptions = {
    header: (props) => {
      const { doneImageSelection } = get(props, 'scene.route.params', {})

      return (
        <HeaderRounded
          {...props}
          style={{ backgroundColor: colorLightBlue }}
          title="Create An Issue"
          getLeftComponent={() => (
            <TouchableOpacity onPress={goBack}>
              <Text style={[styles.text, { marginLeft: 8 }]}>Cancel</Text>
            </TouchableOpacity>
          )}
          getRightComponent={() => (
            <TouchableOpacity onPress={() => {
              doneImageSelection()
              goBack()
            }}>
              <Text style={[styles.text, styles.textBold, { marginRight: 8 }]}>Done</Text>
            </TouchableOpacity>
          )}
        />
      )
    }
  }

  state: {
    photos: any
    selectedPhoto: any
  }

  constructor(props) {
    super(props)

    const { imageId = '' } = get(props, 'navigation.state.params', {})

    this.state = {
      photos: null,
      selectedPhoto: imageId
    }
  }

  makePhoto = async () => {
    const { cancelled, uri }: ImageResult = await ImagePicker.launchCameraAsync({ })
    const {
      selectImage = () => { },
      doneImageSelection
    } = get(this.props, 'navigation.state.params', {})

    if (!cancelled) {
      CameraRoll.saveToCameraRoll(uri, 'photo').then((photoUri) => {
        selectImage({ uri, id: getIdFromImageUri(photoUri) })
        doneImageSelection()
        goBack()
      })
    }
  }

  getPhotos = () => {
    CameraRoll.getPhotos({
      first: 40,
      assetType: 'Photos'
    }).then((res: GetPhotosReturnType) => {
      this.setState({
        photos: res.edges
      })
    })
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    )

    if (status === 'granted') {
      this.getPhotos()
    }
  }

  render() {
    const { photos, selectedPhoto } = this.state
    const { selectImage = () => { } } = get(this.props, 'navigation.state.params', {})

    return (
      <FlatList
        style={styles.container}
        horizontal={false}
        numColumns={3}
        data={photos}
        renderItem={({ item, index }) => {
          const { image } = item.node
          const isSelected = selectedPhoto == getIdFromImageUri(image.uri)

          return (
            <React.Fragment>
              {index === 0 && (
                <TouchableOpacity style={[styles.imageItem, styles.btnCamera]} onPress={this.makePhoto}>
                  <Icon name="photo" color={colorBlueyGrey} size={42} />
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={() => {
                const id = getIdFromImageUri(image.uri)

                this.setState({ selectedPhoto: id })
                selectImage({ uri: image.uri, id })
              }}>
                {isSelected && (
                  <View style={styles.selectedIconContainer}>
                    <Icon name="add" />
                  </View>
                )}
                <Image source={{ uri: image.uri }} style={[styles.imageItem, isSelected ? styles.imageItemSelected : {}]} />
              </TouchableOpacity>
            </React.Fragment>
          )
        }}
        keyExtractor={(item: object, index: number) => String(index)}
        ListEmptyComponent={() => {
          return <Text>No photos available</Text>
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorLightBlue,
    flex: 1,
    margin: 2
  },
  text: {
    fontSize: 14,
    fontFamily: 'poppins',
    color: 'white'
  },
  textBold: {
    fontFamily: 'poppins-semi-bold',
  },
  btnCamera: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent'
  },
  imageItem: {
    height: itemSize,
    width: itemSize,
    margin: 2,
    borderRadius: 4
  },
  imageItemSelected: {
    borderWidth: 5,
    borderColor: colorBlueberry,
  },
  selectedIconContainer: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: colorBlueberry,
    zIndex: 10,
    borderWidth: 4,
    borderColor: colorBlueberry,
    borderTopRightRadius: 4
  }
})