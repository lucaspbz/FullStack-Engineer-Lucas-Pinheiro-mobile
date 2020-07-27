import React from 'react';
import { Text } from 'react-native';
import WebView from 'react-native-webview';

import AlternativesFooter from '../AlternativesFooter';

import styles from './styles';

export default function index({
  currentQuestion,
  toggleShowAlternative,
  showResolution,
  setIsSelected,
  setCanChangePickedAlternative,
  setHasConfirmedAnswer,
}) {
  return (
    <>
      <Text
        style={{
          flex: 1,
          alignSelf: 'flex-start',
          marginLeft: 40,
          marginTop: 20,
          fontWeight: 'bold',
        }}
      >
        Resolução
      </Text>

      <WebView
        originWhitelist={['*']}
        source={{ html: currentQuestion.resolucao }}
        style={[styles.webview, 'addStyle']}
        scalesPageToFit={false}
        containerStyle={styles.HtmlContainer}
      />

      <AlternativesFooter
        showResolution={showResolution}
        toggleShowAlternative={toggleShowAlternative}
        setIsSelected={setIsSelected}
        setCanChangePickedAlternative={setCanChangePickedAlternative}
        setHasConfirmedAnswer={setHasConfirmedAnswer}
      />
    </>
  );
}
