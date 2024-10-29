import React, { useState } from 'react';
import Chessboard from './Chessboard';

const App = () => {
  const [playerTurn, setPlayerTurn] = useState('white');

  const handleMove = () => {
    setPlayerTurn(playerTurn === 'white' ? 'black' : 'white');
  };

  return (
    <div className="chess-game">
      <h1>React Chess Game</h1>
      <h2>Turn: {playerTurn}</h2>
      <Chessboard playerTurn={playerTurn} onMove={handleMove} />
    </div>
  );
};

export default App;
