import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function index({ children, action, icon }) {
  return (
    <TouchableOpacity onPress={action} style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
      <MaterialIcons name={icon} size={30} color="white" style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#2ECC71',
    paddingHorizontal: 110,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 20,
    alignSelf: 'center',
    maxHeight: 70,
    marginTop: 40,
  },

  icon: {
    position: 'absolute',
    right: 20,
  },
});
