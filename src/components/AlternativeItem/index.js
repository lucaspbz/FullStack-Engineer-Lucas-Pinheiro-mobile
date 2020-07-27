import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

import styles from './styles';

export default function index({ data, addStyle, afterConfirm }) {
  let showCorrectContainer = '',
    showCorrectLetter = '';

  if (afterConfirm) {
    showCorrectContainer = styles.correctContainer;
    showCorrectLetter = styles.correctLetter;
  } else {
    showCorrectContainer = styles.wrongContainer;
    showCorrectLetter = styles.wrongLetter;
  }
  if (afterConfirm === '') {
    showCorrectContainer = '';
    showCorrectLetter = '';
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.baseLetter, showCorrectLetter]}>
        {data.letra.toLowerCase()}
      </Text>

      <WebView
        originWhitelist={['*']}
        source={{ html: data.texto }}
        style={[styles.webview, addStyle]}
        scalesPageToFit={false}
        containerStyle={[styles.HtmlContainer, addStyle, showCorrectContainer]}
      />
    </View>
  );
}
