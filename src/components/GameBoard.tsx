import React from 'react';
import Square from './Square';

interface GameBoardProps {
  word: string[];
  status: 'valid' | 'invalid' | 'neutral';
}

/**
 * GameBoard component displays the squares for the word game
 */
const GameBoard: React.FC<GameBoardProps> = ({ word, status }) => {
  // Create an array of 5 squares (or the desired word length)
  const squares = Array(5).fill(null);

  // Determine the border color based on status
  const getBorderColor = () => {
    switch (status) {
      case 'valid':
        return 'border-green-500';
      case 'invalid':
        return 'border-red-500';
      default:
        return 'border-gray-400';
    }
  };

  return (
    <div className="flex gap-2">
      {squares.map((_, index) => (
        <Square 
          key={index} 
          character={word[index] || ''} 
          borderColorClass={getBorderColor()}
        />
      ))}
    </div>
  );
};

export default GameBoard; 