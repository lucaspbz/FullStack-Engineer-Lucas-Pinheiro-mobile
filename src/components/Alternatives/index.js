import React, { useState } from 'react';
import { Text } from 'react-native';

import AlternativeList from '../AlternativeList';
import ButtonAction from '../ButtonAction';
import AlternativesFooter from '../AlternativesFooter';

import styles from './styles';

export default function index({
  currentQuestion,
  hasConfirmedAnswer,
  setHasConfirmedAnswer,
  setIsRightAnswer,
  goToNextQuestion,
  setHowManyCorrectAnswers,
  setHowManyAnsweredQuestions,
  toggleResolution,
  toggleShowAlternative,
  isSelected,
  setIsSelected,
  selectedAlternative,
  setSelectedAlternative,
  canChangePickedAlternative,
  setCanChangePickedAlternative,
}) {
  // console.log('IsSelected:', isSelected);
  // console.log('selectedAlternative:', selectedAlternative);
  // console.log('canChangePickedAlternative:', canChangePickedAlternative);

  const handleConfirmButton = () => {
    currentQuestion.disponivel = false;
    setHowManyAnsweredQuestions((oldQuantity) => oldQuantity + 1);
    setHasConfirmedAnswer(true);

    //finds the correct answer on the alternatives list
    let correctAnswer = currentQuestion.alternativas.filter((alternativa) => {
      return alternativa.correta === true;
    });
    correctAnswer = correctAnswer[0].letra;

    //check if the chosen alternative is the correct one
    //set up the state for correct or wrong
    selectedAlternative === correctAnswer
      ? (setIsRightAnswer(true),
        setHowManyCorrectAnswers((previousValue) => previousValue + 1))
      : setIsRightAnswer(false);
    setIsSelected(false);

    //set block state so user cannot change option after confirm pressed
    setCanChangePickedAlternative(false);
  };

  return (
    <>
      <Text style={styles.alternativeText}>ALTERNATIVAS</Text>

      <AlternativeList
        style={styles.alternativesList}
        canChangePickedAlternative={canChangePickedAlternative}
        items={currentQuestion}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        selectedAlternative={selectedAlternative}
        setSelectedAlternative={setSelectedAlternative}
        hasConfirmedAnswer={hasConfirmedAnswer}
      ></AlternativeList>

      {/* Is active when there is a alternative selected */}
      {isSelected && (
        <ButtonAction action={handleConfirmButton}>CONFIRMAR</ButtonAction>
      )}

      {/* Is active when the alternative is confirmed */}
      {hasConfirmedAnswer && (
        <ButtonAction icon={'chevron-right'} action={goToNextQuestion}>
          PRÓXIMA
        </ButtonAction>
      )}

      <AlternativesFooter
        currentQuestion={currentQuestion}
        hasConfirmedAnswer={hasConfirmedAnswer}
        setHasConfirmedAnswer={setHasConfirmedAnswer}
        toggleResolution={toggleResolution}
        toggleShowAlternative={toggleShowAlternative}
        setIsSelected={setIsSelected}
      />
    </>
  );
}
