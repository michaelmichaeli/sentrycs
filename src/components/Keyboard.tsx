import React from 'react';
import { FiDelete } from 'react-icons/fi';
import { ImSpinner8 } from 'react-icons/im';

interface KeyboardProps {
  onCharacterClick: (char: string) => void;
  onBackspaceClick: () => void;
  onEnterClick: () => void;
  wordIsFull: boolean;
  isLoading?: boolean;
}

/**
 * Keyboard component displays a virtual keyboard for the word game
 */
const Keyboard: React.FC<KeyboardProps> = ({ 
  onCharacterClick, 
  onBackspaceClick, 
  onEnterClick,
  wordIsFull,
  isLoading = false
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

  // Determine if Enter button should be disabled
  const isEnterDisabled = isLoading || !wordIsFull;

  // Get Enter button background color based on state
  const getEnterButtonClass = () => {
    if (isLoading) return 'bg-blue-400';
    if (!wordIsFull) return 'bg-blue-300';
    return 'bg-blue-600';
  };

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-3xl">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1 justify-center w-full h-12">
          {rowIndex === 2 && (
            <div className="w-[80px] h-12">
              <button
                className={`px-4 py-3 ${getEnterButtonClass()} text-white rounded font-semibold text-sm flex items-center justify-center w-full h-full transition-colors`}
                onClick={onEnterClick}
                disabled={isEnterDisabled}
                title={!wordIsFull ? "Complete the word first" : "Check word"}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  {isLoading ? (
                    <ImSpinner8 className="animate-spin" size={16} />
                  ) : (
                    'ENTER'
                  )}
                </div>
              </button>
            </div>
          )}
          
          {row.map((char) => (
            <div key={char} className="w-10 h-12">
              <button
                className="w-full h-full bg-gray-300 text-gray-800 rounded font-semibold text-lg hover:bg-gray-400 transition-colors"
                onClick={() => handleCharClick(char)}
                disabled={isLoading}
              >
                {char}
              </button>
            </div>
          ))}
          
          {rowIndex === 2 && (
            <div className="w-[80px] h-12">
              <button
                className="w-full h-full bg-gray-600 text-white rounded font-semibold flex items-center justify-center"
                onClick={onBackspaceClick}
                aria-label="Backspace"
                disabled={isLoading}
              >
                <FiDelete size={20} />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Keyboard; 