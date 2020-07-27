import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default function index({ isRight }) {
  let color, message;

  const customStyles = {
    width: Dimensions.get('window').width,
    height: 80,
    position: 'absolute',
    top: Constants.statusBarHeight,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };
  if (isRight) {
    color = '#2ECC71';
    message = 'Resposta certa!';
  } else {
    color = '#E84C3D';
    message = 'Resposta errada';
  }

  return (
    <View style={[customStyles, { backgroundColor: color }]}>
      <Text
        style={{
          color: '#fff',
          fontSize: 18,
          fontWeight: 'bold',
        }}
      >
        {message}
      </Text>
    </View>
  );
}
