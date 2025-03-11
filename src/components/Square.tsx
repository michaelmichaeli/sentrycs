import React from 'react';

interface SquareProps {
  character?: string;
  borderColorClass: string;
}

/**
 * Square component represents a single character square in the game
 */
const Square: React.FC<SquareProps> = ({ character = '', borderColorClass }) => {
  return (
    <div 
      className={`w-16 h-16 flex items-center justify-center text-2xl font-bold border-2 ${borderColorClass} rounded`}
      data-testid="square"
    >
      {character.toUpperCase()}
    </div>
  );
};

export default Square; 