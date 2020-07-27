import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  buttonText: {
    color: '#389ADB',
    fontWeight: 'bold',
    fontSize: 15,
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
    flex: 1,
    alignItems: 'center',
  },
  disabled: {
    color: '#E0E0E0',
  },
});
