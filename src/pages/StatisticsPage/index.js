import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import timeFormatter from '../../helpers/timeFormatter';

export default function index() {
  const navigator = useNavigation();
  const route = useRoute();
  const { correctAnswers, totalQuestions, testDuration } = route.params;

  return (
    <View
      style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: Dimensions.get('window').width - 100,
        }}
      >
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Feather
            style={{
              alignSelf: 'center',
              position: 'absolute',
            }}
            name="check"
            size={35}
            color="#2ECC71"
          />
          <Feather
            style={{ alignSelf: 'center' }}
            name="clipboard"
            size={100}
            color="black"
          />
        </View>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            fontWeight: 'bold',
            marginVertical: 40,
          }}
        >
          Você respondeu todas as questões
        </Text>

        <Text
          style={{
            fontSize: 15,
            textAlign: 'center',
            lineHeight: 25,
            color: '#9FA1A4',
          }}
        >
          Você concluiu o simulado com{' '}
          <Text style={{ color: '#2ECC71' }}>
            {((correctAnswers * 100) / totalQuestions).toFixed(0)}%
          </Text>{' '}
          de aproveitamento. Duração do teste: {timeFormatter(testDuration)}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          borderWidth: 2,
          borderColor: '#2ECC71',
          borderRadius: 50,
          padding: 25,
          width: Dimensions.get('window').width - 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          navigator.navigate('MainPage');
        }}
      >
        <Text style={{ fontWeight: 'bold' }}>
          Finalizar e voltar para questões
        </Text>
      </TouchableOpacity>
    </View>
  );
}
