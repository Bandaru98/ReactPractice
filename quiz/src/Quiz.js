import React, { useState } from 'react';

const questions = {
  "General Knowledge": {
    easy: [
      { question: "What is the capital of France?", options: ["Paris", "Berlin", "Rome"], answer: "Paris" },
      { question: "What color is the sky?", options: ["Blue", "Green", "Red"], answer: "Blue" }
    ],
    medium: [
      { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "J.K. Rowling", "Mark Twain"], answer: "Harper Lee" },
    ],
    hard: [
      { question: "What is the speed of light?", options: ["299,792 km/s", "150,000 km/s", "1,000,000 km/s"], answer: "299,792 km/s" },
    ]
  },
  "Science": {
    easy: [
      { question: "What planet is known as the Red Planet?", options: ["Mars", "Jupiter", "Earth"], answer: "Mars" },
    ]
    // Add more science questions for each difficulty level if needed
  }
  // Add more categories and questions as needed
};

const Quiz = ({ settings, resetQuiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const { category, difficulty } = settings;
  const quizQuestions = questions[category]?.[difficulty];

  // Check if there are questions for the selected category and difficulty
  if (!quizQuestions || quizQuestions.length === 0) {
    return (
      <div>
        <h2>No questions available for the selected category and difficulty.</h2>
        <button onClick={resetQuiz}>Back to Settings</button>
      </div>
    );
  }

  const handleAnswer = (selectedAnswer) => {
    if (quizQuestions[currentQuestionIndex].answer === selectedAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz">
      {showResult ? (
        <div>
          <h2>Your Score: {score}/{quizQuestions.length}</h2>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{quizQuestions[currentQuestionIndex].question}</p>
          {quizQuestions[currentQuestionIndex].options.map((option) => (
            <button key={option} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
