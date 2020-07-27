import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';

import ButtonAction from '../../components/ButtonAction';
import MainPageBody from '../../components/MainPageBody';
import Modal from '../../components/CustomModal';

import arrayShuffler from '../../helpers/arrayShuffler';

import api from '../../services/api';

import styles from './styles.js';

export default function Questions() {
  const [modalVisible, setModalVisible] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [howManySelectedQuestions, setHowManySelectedQuestions] = useState(1);

  useEffect(() => {
    async function fetchData() {
      let { data } = await api.get();

      //filter available questions
      let filteredQuestions = data.filter((question) => question.disponivel);
      setQuestions(filteredQuestions);
    }
    fetchData();
  }, []);
  const navigation = useNavigation();

  const navigateToStatement = (data) => {
    navigation.navigate('Statement', { data });
  };

  const handleSelectHowManyQuestions = () => {
    setModalVisible(true);
  };

  const handleStart = () => {
    //shuffle and get the correct number of questions sorted by numeroQuestao

    let shuffledQuestions = arrayShuffler(questions, howManySelectedQuestions);

    navigateToStatement(shuffledQuestions);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}> Questões</Text>

        <MainPageBody
          howManySelectedQuestions={howManySelectedQuestions}
          handleSelectHowManyQuestions={handleSelectHowManyQuestions}
        />

        <ButtonAction action={handleStart}>COMEÇAR</ButtonAction>

        <Modal
          max={Math.min(40, questions.length)}
          howManySelectedQuestions={howManySelectedQuestions}
          setHowManySelectedQuestions={setHowManySelectedQuestions}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
    </>
  );
}
