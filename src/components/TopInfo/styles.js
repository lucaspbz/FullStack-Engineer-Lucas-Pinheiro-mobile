import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  topBarText: {
    color: '#2ECC71',
    fontSize: 15,
    fontWeight: 'bold',
  },
  topBarInfoContainer: {
    marginTop: Constants.statusBarHeight,
    alignSelf: 'center',
  },
  topBarContainer: {
    flex: 1,
    maxHeight: Constants.statusBarHeight + 50,
    width: Dimensions.get('window').width,
  },
});
