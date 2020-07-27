import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import timeFormmater from '../../helpers/timeFormatter';

import styles from './styles';

export default function index({ title, timeCounter, setTimeCounter }) {
  useEffect(() => {
    let interval = setInterval(() => {
      setTimeCounter((oldTimeCounter) => setTimeCounter(oldTimeCounter + 1));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <View style={styles.topBarContainer}>
      <View style={styles.topBarInfoContainer}>
        <Text style={styles.topBarText}>{title}</Text>
        <Text>{timeFormmater(timeCounter)}</Text>
      </View>
    </View>
  );
}
