
import React, { useState, useEffect } from 'react';
import questions from './questions.json';
import './App.css';

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const prevData = JSON.parse(localStorage.getItem('quizData'));
    if (prevData) {
      setCurrentQuestion(prevData.currentQuestion);
      setScore(prevData.score);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quizData', JSON.stringify({ currentQuestion, score }));
  }, [currentQuestion, score]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>You scored {score} out of {questions.length}</div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} key={index}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizApp;
