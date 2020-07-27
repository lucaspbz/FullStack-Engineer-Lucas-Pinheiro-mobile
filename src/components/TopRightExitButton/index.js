import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const index = ({ action }) => {
  return (
    <TouchableOpacity style={styles.exitButton}>
      <Text onPress={action} style={styles.buttonText}>
        Sair
      </Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
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
});
