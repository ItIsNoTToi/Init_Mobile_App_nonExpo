
import WebView from 'react-native-webview';
import {StatusBar} from 'react-native';
import { StyleSheet } from 'react-native';

function App () {
  return (
    <WebView
      source={{uri: 'https://moitruongquocgia.mae.gov.vn/mobile/#/web/csdl_mt/trang_chu'}}
      style={styles.container}
      javaScriptEnabled={true}
      originWhitelist={['*']}
      onReceivedSslError={(event: any) => {
        event.preventDefault();
      }}
      domStorageEnabled={true}
      mixedContentMode="always"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default App;