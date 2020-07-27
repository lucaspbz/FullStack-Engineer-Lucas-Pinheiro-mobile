import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  exitButton: {
    position: 'absolute',
    right: 20,
    top: Constants.statusBarHeight + 10,
  },
  buttonText: {
    color: '#389ADB',
    fontWeight: 'bold',
    fontSize: 15,
  },
  htmlContainer: {
    maxHeight: 500,
  },
});
