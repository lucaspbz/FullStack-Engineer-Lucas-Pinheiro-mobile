import React from 'react';

import CustomWebView from '../CustomWebView';
import QuestionFooter from '../QuestionFooter';

export default function index({
  currentQuestion,
  handleShowAlternatives,
  length,
  currentIndex,
  setCurrentIndex,
}) {
  return (
    <>
      <CustomWebView currentQuestion={currentQuestion} />
      <QuestionFooter
        handleShowAlternatives={handleShowAlternatives}
        currentQuestion={currentQuestion}
        length={length}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}
