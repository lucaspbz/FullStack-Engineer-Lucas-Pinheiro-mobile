import React from 'react';
import { View, Text } from 'react-native';

import MainPageItem from '../MainPageItem';

export default function index({
  howManySelectedQuestions,
  handleSelectHowManyQuestions,
}) {
  return (
    <View style={{ flex: 10, justifyContent: 'center' }}>
      <MainPageItem icon="chevron-right">ENEM</MainPageItem>
      <MainPageItem icon="chevron-right">Vestibulares anteriores</MainPageItem>
      <MainPageItem icon="chevron-right">Todos os anos</MainPageItem>
      <MainPageItem icon="chevron-right">
        Todas as matérias e assuntos
      </MainPageItem>

      <MainPageItem action={handleSelectHowManyQuestions} icon="plus">
        <Text style={{ color: '#208ED7', fontWeight: 'bold' }}>
          {howManySelectedQuestions}
        </Text>{' '}
        {howManySelectedQuestions === 1 ? 'questão' : 'questões'}
      </MainPageItem>
    </View>
  );
}
