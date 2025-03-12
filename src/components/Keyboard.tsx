import React, { useMemo } from 'react';
import { FiDelete } from 'react-icons/fi';
import { ImSpinner8 } from 'react-icons/im';
import { Button } from "@/components/ui/Button";

interface KeyboardProps {
  onCharacterClick: (char: string) => void;
  onBackspaceClick: () => void;
  onEnterClick: () => void;
  wordIsFull: boolean;
  isLoading?: boolean;
  disableKeys?: boolean;
  currentWordLength?: number;
}

/**
 * Keyboard component displays a virtual keyboard for the word game
 */
const Keyboard: React.FC<KeyboardProps> = ({ 
  onCharacterClick, 
  onBackspaceClick, 
  onEnterClick,
  wordIsFull,
  isLoading = false,
  disableKeys = false,
  currentWordLength = 0
}) => {
  // Define keyboard rows
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  // Define retro colors for keys
  const retroColors = useMemo(() => {
    const colors = [
      'bg-pink-400 hover:bg-pink-500',
      'bg-purple-400 hover:bg-purple-500',
      'bg-blue-400 hover:bg-blue-500',
      'bg-cyan-400 hover:bg-cyan-500',
      'bg-teal-400 hover:bg-teal-500',
      'bg-green-400 hover:bg-green-500',
      'bg-yellow-400 hover:bg-yellow-500',
      'bg-orange-400 hover:bg-orange-500',
      'bg-red-400 hover:bg-red-500',
    ];
    
    // Create a map of characters to colors
    const colorMap: Record<string, string> = {};
    const allChars = rows.flat();
    
    allChars.forEach(char => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      colorMap[char] = colors[randomIndex];
    });
    
    return colorMap;
  }, []);

  // Handle character button click
  const handleCharClick = (char: string) => {
    if (!wordIsFull && !disableKeys) {
      onCharacterClick(char);
    }
  };

  // Determine if Enter button should be disabled
  const isEnterDisabled = isLoading || !wordIsFull;

  // Determine if Backspace button should be disabled - when loading or when there are 0 letters
  const isBackspaceDisabled = isLoading || currentWordLength === 0;

  // Get key color based on whether keys are disabled
  const getKeyColor = (char: string) => {
    if (disableKeys) {
      return 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed';
    }
    return retroColors[char];
  };

  // Get Enter button style based on disabled state
  const getEnterButtonStyle = () => {
    if (isEnterDisabled) {
      return 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed';
    }
    return 'bg-emerald-500 hover:bg-emerald-600';
  };

  // Get Backspace button style based on disabled state
  const getBackspaceButtonStyle = () => {
    if (isBackspaceDisabled) {
      return 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed';
    }
    return 'bg-rose-500 hover:bg-rose-600';
  };

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-3xl">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-4 justify-center w-full h-12">
          {rowIndex === 2 && (
            <div className="w-[80px] h-12">
              <Button
                className={`w-full h-full flex items-center justify-center ${getEnterButtonStyle()}`}
                onClick={onEnterClick}
                disabled={isEnterDisabled}
                title={!wordIsFull ? "Complete the word first" : "Check word"}
                variant={isEnterDisabled ? "outline" : "default"}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  {isLoading ? (
                    <ImSpinner8 className="animate-spin" size={16} />
                  ) : (
                    'ENTER'
                  )}
                </div>
              </Button>
            </div>
          )}
          
          {row.map((char) => (
            <div key={char} className="w-10 h-12">
              <Button
                className={`w-full h-full text-lg text-white font-bold shadow-md ${getKeyColor(char)}`}
                onClick={() => handleCharClick(char)}
                disabled={isLoading || disableKeys}
                variant="default"
              >
                {char}
              </Button>
            </div>
          ))}
          
          {rowIndex === 2 && (
            <div className="w-[80px] h-12">
              <Button
                className={`w-full h-full flex items-center justify-center ${getBackspaceButtonStyle()}`}
                onClick={onBackspaceClick}
                aria-label="Backspace"
                disabled={isBackspaceDisabled}
                variant="default"
              >
                <FiDelete size={20} />
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Keyboard; 