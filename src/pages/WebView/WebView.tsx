import * as React from 'react'
import { WebView, SafeAreaView } from 'react-native'
import get from 'lodash.get'
import { HeaderRounded } from '../../components/HeaderRounded/HeaderRounded'

export class WebViewScreen extends React.PureComponent<any> {
  static navigationOptions = {
    header: (props) => {
      const { pageTitle = 'Web View' } = get(props, 'scene.route.params', {})

      return <HeaderRounded {...props} title={pageTitle} />
    }
  }

  render() {
    const { url = '' } = get(this.props, 'navigation.state.params', {})

    return (
      <SafeAreaView style={{ flex: 1 }}>
        {!!url && <WebView style={{ flex: 1 }} source={{ uri: url }} />}
      </SafeAreaView>
    )
  }
}