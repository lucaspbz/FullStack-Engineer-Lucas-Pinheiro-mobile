import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Constants from 'expo-constants';

export default function index({ action }) {
  return (
    <MaterialCommunityIcons
      onPress={action}
      style={{
        position: 'absolute',
        top: Constants.statusBarHeight + 10,
        left: 10,
      }}
      name="chevron-down"
      size={35}
      color="#DDDDDD"
    />
  );
}
