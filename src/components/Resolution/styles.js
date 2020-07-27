import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  webview: {
    width: Dimensions.get('window').width - 80,
    margin: 10,
    padding: 40,
  },

  HtmlContainer: {
    alignItems: 'center',
    flex: 7,
  },
});
