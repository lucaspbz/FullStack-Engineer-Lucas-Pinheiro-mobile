import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  webview: {
    width: Dimensions.get('window').width - 10,
    // backgroundColor: 'red',
  },
  htmlContainer: {
    // width: Dimensions.get('window').width,
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  bodyContainer: {
    // backgroundColor: 'red',
    padding: 10,
    flex: 9,
  },
  materia: {
    marginLeft: 25,
    marginBottom: 20,
    marginTop: 40,
    fontWeight: 'bold',
  },
});
