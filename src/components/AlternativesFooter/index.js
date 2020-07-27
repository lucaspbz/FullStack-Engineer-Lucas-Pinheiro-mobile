import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

export default function index({
  hasConfirmedAnswer,
  setHasConfirmedAnswer,
  currentQuestion,
  toggleResolution,
  toggleShowAlternative,
  showResolution,
  setIsSelected,
  setCanChangePickedAlternative,
}) {
  let canOpenResolution =
    hasConfirmedAnswer && currentQuestion.resolucao !== '';

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        disabled={!showResolution}
        onPress={() => {
          setHasConfirmedAnswer(true);
          setCanChangePickedAlternative(false);
          toggleShowAlternative();
        }}
      >
        <MaterialCommunityIcons
          name="format-list-numbered"
          size={35}
          color={showResolution ? '#DDDDDD' : '#2ECC71'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!canOpenResolution}
        onPress={() => {
          setIsSelected(false);
          setHasConfirmedAnswer(false);
          toggleResolution();
        }}
      >
        <MaterialCommunityIcons
          name="format-list-checks"
          size={35}
          color={showResolution ? '#2ECC71' : '#DDDDDD'}
        />
        <View
          style={[canOpenResolution ? styles.redDot : '', styles.isActive]}
        ></View>
      </TouchableOpacity>
    </View>
  );
}
