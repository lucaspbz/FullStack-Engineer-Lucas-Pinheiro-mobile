import React from 'react';
import { FlatList, SafeAreaView, TouchableOpacity, View } from 'react-native';

import AlternativeItem from '../AlternativeItem';

export default function index({
  style,
  items,
  setIsSelected,
  selectedAlternative,
  setSelectedAlternative,
  canChangePickedAlternative,
  isSelected,
  hasConfirmedAnswer,
}) {
  const { alternativas } = items;

  const renderItem = ({ item }) => {
    const handleSelectAlternative = () => {
      //check if user can still change chosen alternative
      if (canChangePickedAlternative) {
        setSelectedAlternative(item.letra);
        setIsSelected(true);
      }
    };

    const addStyle = !isSelected
      ? { borderColor: '#B8C4CB' }
      : item.letra === selectedAlternative
      ? { borderColor: '#212121' }
      : { borderColor: '#B8C4CB', opacity: 0.2 };

    let afterConfirm = '';
    if (hasConfirmedAnswer && item.correta) {
      afterConfirm = true;
    } else if (hasConfirmedAnswer && item.letra === selectedAlternative) {
      afterConfirm = false;
    }
    return (
      <TouchableOpacity onPress={handleSelectAlternative}>
        <AlternativeItem
          data={item}
          addStyle={addStyle}
          afterConfirm={afterConfirm}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={style}>
      <SafeAreaView>
        <FlatList
          data={alternativas}
          renderItem={renderItem}
          keyExtractor={(item) => item.letra}
          extraData={selectedAlternative}
        />
      </SafeAreaView>
    </View>
  );
}
