export const initializeBoard = () => {
    const board = Array(64).fill(null);
  
    const setupPieces = (row, color) => {
      const pieces = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
      for (let i = 0; i < 8; i++) {
        board[row * 8 + i] = { type: pieces[i], color };
      }
      for (let i = 0; i < 8; i++) {
        board[(row + (color === 'white' ? 1 : -1)) * 8 + i] = { type: 'pawn', color };
      }
    };
  
    setupPieces(0, 'black');
    setupPieces(7, 'white');
    return board;
  };
  