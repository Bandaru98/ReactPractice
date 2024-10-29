import React, { useState } from 'react';

const QuizSetup = ({ startQuiz }) => {
  const [category, setCategory] = useState('General Knowledge');
  const [difficulty, setDifficulty] = useState('easy');

  const handleSubmit = (e) => {
    e.preventDefault();
    startQuiz({ category, difficulty });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="General Knowledge">General Knowledge</option>
          <option value="Science">Science</option>
          <option value="Math">Math</option>
          {/* Add more categories as needed */}
        </select>
      </label>
      <label>
        Select Difficulty:
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <button type="submit">Start Quiz</button>
    </form>
  );
};

export default QuizSetup;
