import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import TopInfo from '../../components/TopInfo';
import TopRightExitButton from '../../components/TopRightExitButton';
import QuestionBody from '../../components/QuestionBody';
import Alternatives from '../../components/Alternatives';
import TopGoBackButton from '../../components/TopGoBackButton';
import ShowResultTopBar from '../../components/ShowResultTopBar';
import Resolution from '../../components/Resolution';

import styles from './styles';

export default function Statement() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isRightAnswer, setIsRightAnswer] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedAlternative, setSelectedAlternative] = useState(null);
  const [canChangePickedAlternative, setCanChangePickedAlternative] = useState(
    true
  );

  const [showEnunciado, setShowEnunciado] = useState(true);
  const [showAlternatives, setShowAlternatives] = useState(false);
  const [showResolution, setShowResolution] = useState(false);

  const [hasConfirmedAnswer, setHasConfirmedAnswer] = useState(false);
  const [howManyCorrectAnswers, setHowManyCorrectAnswers] = useState(0);
  const [howManyAnsweredQuestions, setHowManyAnsweredQuestions] = useState(0);

  const [timeCounter, setTimeCounter] = useState(0);

  const navigation = useNavigation();
  const route = useRoute();

  let materia = '';

  if (currentQuestion !== null && currentQuestion !== undefined) {
    materia = currentQuestion.materia;
  }

  useEffect(() => {
    const { data } = route.params;
    setQuestions(data);
  }, []);

  useEffect(() => {
    setCurrentQuestion(questions[currentIndex]);
  }, [currentIndex]);

  useEffect(() => {
    setCurrentQuestion(questions[0]);
  }, [questions]);

  const handleShowQuestion = () => {
    setShowEnunciado(true);
    setShowAlternatives(false);
    setShowResolution(false);

    checkIfAllQuestionsAreAnswered();
  };

  const handleShowAlternative = () => {
    setShowEnunciado(false);
    setShowAlternatives(true);
    setShowResolution(false);
  };

  const handleShowResolution = () => {
    setShowEnunciado(false);
    setShowAlternatives(false);
    setShowResolution(true);
  };

  //function to be called when the question is answered
  const goToNextQuestion = () => {
    setHasConfirmedAnswer(false);
    setIsSelected(false);
    setCanChangePickedAlternative(true);
    handleShowQuestion();
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((previousValue) => previousValue + 1);
    }
    checkIfAllQuestionsAreAnswered();
  };

  //check if all questions are answered and navigate to StatisticsPage case true
  const checkIfAllQuestionsAreAnswered = () => {
    if (howManyAnsweredQuestions === questions.length) {
      resetAvailableQuestions();
      navigation.navigate('StatisticsPage', {
        correctAnswers: howManyCorrectAnswers,
        totalQuestions: questions.length,
        testDuration: timeCounter,
      });
    }
  };
  const resetAvailableQuestions = () => {
    questions.map((questions) => (questions.disponivel = true));
  };

  return (
    <View style={styles.container}>
      <TopInfo
        setTimeCounter={setTimeCounter}
        timeCounter={timeCounter}
        title={materia}
        length={questions.length}
        currentIndex={currentIndex}
      />
      {hasConfirmedAnswer && <ShowResultTopBar isRight={isRightAnswer} />}

      {(showAlternatives || showResolution) && (
        <TopGoBackButton action={handleShowQuestion} />
      )}

      {showEnunciado && (
        <TopRightExitButton
          action={() => {
            resetAvailableQuestions();
            navigation.goBack();
          }}
        />
      )}

      {showEnunciado && (
        <QuestionBody
          currentIndex={currentIndex}
          currentQuestion={currentQuestion}
          length={questions.length}
          setCurrentIndex={setCurrentIndex}
          handleShowAlternatives={handleShowAlternative}
        />
      )}

      {showAlternatives && (
        <Alternatives
          setHowManyCorrectAnswers={setHowManyCorrectAnswers}
          goToNextQuestion={goToNextQuestion}
          hasConfirmedAnswer={hasConfirmedAnswer}
          setIsRightAnswer={setIsRightAnswer}
          setHasConfirmedAnswer={setHasConfirmedAnswer}
          currentQuestion={currentQuestion}
          toggleResolution={handleShowResolution}
          setHowManyAnsweredQuestions={setHowManyAnsweredQuestions}
          toggleShowAlternative={handleShowAlternative}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          selectedAlternative={selectedAlternative}
          setSelectedAlternative={setSelectedAlternative}
          canChangePickedAlternative={canChangePickedAlternative}
          setCanChangePickedAlternative={setCanChangePickedAlternative}
        />
      )}

      {showResolution && (
        <Resolution
          showResolution={showResolution}
          toggleShowAlternative={handleShowAlternative}
          currentQuestion={currentQuestion}
          setIsSelected={setIsSelected}
          setCanChangePickedAlternative={setCanChangePickedAlternative}
          setHasConfirmedAnswer={setHasConfirmedAnswer}
        />
      )}
    </View>
  );
}
