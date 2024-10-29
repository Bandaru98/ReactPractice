import React from 'react';
import Piece from './Piece';

const Square = ({ index, piece, playerTurn, onMove }) => {
  const isDark = (Math.floor(index / 8) + (index % 8)) % 2 === 1;

  const handleClick = () => {
    if (piece && piece.color === playerTurn) {
      onMove(index);
    }
  };

  return (
    <div
      className={`square ${isDark ? 'dark' : 'light'}`}
      onClick={handleClick}
    >
      {piece && <Piece piece={piece} />}
    </div>
  );
};

export default Square;
