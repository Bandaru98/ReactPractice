import React, { useState } from 'react';
import QuizSetup from './QuizSetup';
import Quiz from './Quiz';

const App = () => {
  const [quizSettings, setQuizSettings] = useState(null);

  const startQuiz = (settings) => {
    setQuizSettings(settings);
  };

  const resetQuiz = () => {
    setQuizSettings(null);
  };

  return (
    <div className="quiz-app">
      <h1>Quiz Application</h1>
      {!quizSettings ? (
        <QuizSetup startQuiz={startQuiz} />
      ) : (
        <Quiz settings={quizSettings} resetQuiz={resetQuiz} />
      )}
    </div>
  );
};

export default App;

