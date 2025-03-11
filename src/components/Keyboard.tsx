import React from 'react';
import { FiDelete } from 'react-icons/fi';

interface KeyboardProps {
  onCharacterClick: (char: string) => void;
  onBackspaceClick: () => void;
  onEnterClick: () => void;
  wordIsFull: boolean;
}

/**
 * Keyboard component displays a virtual keyboard for the word game
 */
const Keyboard: React.FC<KeyboardProps> = ({ 
  onCharacterClick, 
  onBackspaceClick, 
  onEnterClick,
  wordIsFull
}) => {
  // Define keyboard rows
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  // Handle character button click
  const handleCharClick = (char: string) => {
    if (!wordIsFull) {
      onCharacterClick(char);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-3xl">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1 justify-center w-full">
          {rowIndex === 2 && (
            <button
              className="px-4 py-3 bg-blue-600 text-white rounded font-semibold text-sm"
              onClick={onEnterClick}
            >
              ENTER
            </button>
          )}
          
          {row.map((char) => (
            <button
              key={char}
              className="w-10 h-12 bg-gray-300 text-gray-800 rounded font-semibold text-lg hover:bg-gray-400 transition-colors"
              onClick={() => handleCharClick(char)}
            >
              {char}
            </button>
          ))}
          
          {rowIndex === 2 && (
            <button
              className="px-4 py-3 bg-gray-600 text-white rounded font-semibold flex items-center justify-center"
              onClick={onBackspaceClick}
              aria-label="Backspace"
            >
              <FiDelete size={20} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Keyboard; 