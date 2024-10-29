import React, { useState } from 'react';
import Square from './Square';
import { initializeBoard } from './chessUtils';

const Chessboard = ({ playerTurn, onMove }) => {
  const [board, setBoard] = useState(initializeBoard());

  const handlePieceMove = (from, to) => {
    const updatedBoard = [...board];
    updatedBoard[to] = updatedBoard[from];
    updatedBoard[from] = null;
    setBoard(updatedBoard);
    onMove();
  };

  return (
    <div className="chessboard">
      {board.map((piece, index) => (
        <Square
          key={index}
          index={index}
          piece={piece}
          playerTurn={playerTurn}
          onMove={handlePieceMove}
        />
      ))}
    </div>
  );
};

export default Chessboard;
