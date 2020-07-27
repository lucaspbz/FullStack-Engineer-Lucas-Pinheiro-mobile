import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './styles';

export default function index({
  currentQuestion,
  length,
  currentIndex,
  setCurrentIndex,
  handleShowAlternatives,
}) {
  let disponivel = true;

  if (currentQuestion !== undefined && currentQuestion !== null) {
    disponivel = !currentQuestion.disponivel;
  }

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => {
          setCurrentIndex(currentIndex - 1);
        }}
        disabled={currentIndex === 0}
      >
        <Text
          style={
            currentIndex === 0
              ? [styles.buttonText, styles.disabled]
              : styles.buttonText
          }
        >
          Anterior
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={disponivel}
        onPress={() => {
          handleShowAlternatives();
        }}
      >
        <FontAwesome5
          name="comment"
          size={25}
          color={!disponivel ? '#25CA6B' : '#E0E0E0'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setCurrentIndex(currentIndex + 1);
        }}
        disabled={currentIndex === length - 1}
      >
        <Text
          style={
            currentIndex === length - 1
              ? [styles.buttonText, styles.disabled]
              : styles.buttonText
          }
        >
          Pular
        </Text>
      </TouchableOpacity>
    </View>
  );
}
