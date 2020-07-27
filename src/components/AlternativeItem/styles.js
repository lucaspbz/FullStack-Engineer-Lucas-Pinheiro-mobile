import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  webview: {
    flex: 10,
    width: Dimensions.get('window').width - 80,
    // backgroundColor: 'red',
    margin: 10,
    padding: 40,
  },

  HtmlContainer: {
    borderStyle: 'solid',
    borderRadius: 3,
    borderWidth: 2,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    marginLeft: 5,
  },
  container: {
    padding: 5,
    margin: 15,
    // backgroundColor: 'green',
    flexDirection: 'row',
    width: Dimensions.get('window').width - 30,
    alignSelf: 'center',
  },
  correctContainer: {
    borderColor: '#26CA6C',
  },
  wrongContainer: {
    borderColor: '#E84C3D',
  },
  correctLetter: {
    backgroundColor: '#26CA6C',
    color: '#fff',
  },
  wrongLetter: {
    backgroundColor: '#E84C3D',
    color: '#fff',
  },
  baseLetter: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
