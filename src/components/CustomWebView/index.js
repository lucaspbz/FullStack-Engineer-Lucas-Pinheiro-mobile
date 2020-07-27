import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

import styles from './styles';

export default function index({ currentQuestion }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currentQuestion === null || currentQuestion === undefined) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [currentQuestion]);

  if (isLoading) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.bodyContainer}>
        <Text style={styles.materia}>
          {currentQuestion.materia.toUpperCase()}
        </Text>

        <WebView
          originWhitelist={['*']}
          source={{ html: currentQuestion.enunciado }}
          style={styles.webview}
          scalesPageToFit={false}
          containerStyle={styles.htmlContainer}
          textZoom={100}
        />
      </View>
    );
  }
}
