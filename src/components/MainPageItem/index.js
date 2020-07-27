import React from 'react';
import { Text, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function index({ children, icon, action }) {
  return (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width - 50,
        margin: 5,
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 20 }}>{children}</Text>
      <FontAwesome5 name={icon} size={18} color="#4DA5E0" />
    </TouchableOpacity>
  );
}
