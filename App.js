import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font';

import styles from './styles';

import Routes from './src/routes';

export default function App() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Arial: require('./src/assets/fonts/Arial.ttf'),
      });
    }
    loadFonts();
    console.log('Starting up...');
  }, []);
  return <Routes />;
}
