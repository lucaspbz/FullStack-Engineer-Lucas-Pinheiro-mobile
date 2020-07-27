import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function index({
  value,
  onChange,
  minValue,
  maxValue,
  totalWidth,
  totalHeight,
  iconSize,
  step,
  textColor,
  iconStyle,
  rightButtonBackgroundColor,
  leftButtonBackgroundColor,
}) {
  const handleIncrease = () => {
    if (value + step <= maxValue) {
      onChange(value + step);
    }
  };
  const handleDecrease = () => {
    if (value - step >= minValue) {
      onChange(value - step);
    }
  };
  return (
    <View
      style={{
        width: totalWidth,
        height: totalHeight,
        maxHeight: totalHeight,
        flexDirection: 'row',
        flex: 1,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: leftButtonBackgroundColor,
          height: totalHeight,
          flex: 0.3,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={handleDecrease}
      >
        <Text style={[iconStyle, { fontSize: iconSize + 10 }]}>-</Text>
      </TouchableOpacity>

      <TextInput
        autoFocus
        clearTextOnFocus
        value={String(value)}
        onChangeText={(newValue) => {
          onChange(newValue);
        }}
        style={{
          color: textColor,
          flex: 0.4,
          fontSize: iconSize - 7,
          height: totalHeight,
          textAlign: 'center',
        }}
        keyboardType={'numeric'}
      ></TextInput>

      <TouchableOpacity
        onPress={handleIncrease}
        style={{
          backgroundColor: rightButtonBackgroundColor,
          height: totalHeight,
          flex: 0.3,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={[iconStyle, { fontSize: iconSize }]}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
