import React, { useMemo } from 'react';
import { FiDelete, FiCornerDownLeft, FiRefreshCw } from 'react-icons/fi';
import { Button } from "@/components/ui/Button";
import { useKeyboard } from '@/hooks/useKeyboard';
import { KeyboardProps } from '@/types';

const Keyboard: React.FC<KeyboardProps> = ({ 
  onCharacterClick, 
  onBackspaceClick, 
  onEnterClick,
  onResetGame,
  wordIsFull,
  isLoading = false,
  disableKeys = false,
  currentWordLength = 0
}) => {
  const rows = useMemo(() => [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ], []);

  const { isEnterDisabled, isBackspaceDisabled } = useKeyboard({
    onCharacterClick,
    onBackspaceClick,
    onEnterClick,
    onResetGame,
    wordIsFull,
    isLoading,
    disableKeys,
    currentWordLength
  });

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
    
    const colorMap: Record<string, string> = {};
    const allChars = rows.flat();
    
    allChars.forEach(char => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      colorMap[char] = colors[randomIndex];
    });
    
    return colorMap;
  }, [rows]);

  const handleCharClick = (char: string) => {
    if (!wordIsFull && !disableKeys) {
      onCharacterClick(char);
    }
  };

  const getKeyColor = (char: string) => {
    if (disableKeys) {
      return 'bg-gray-200 hover:bg-gray-200 cursor-not-allowed shadow-md hover:shadow-md';
    }
    return retroColors[char];
  };

  const disabledStyle = 'bg-gray-200 hover:bg-gray-200 cursor-not-allowed shadow-md hover:shadow-md';

  const getEnterButtonStyle = () => {
    if (isEnterDisabled) {
      return disabledStyle;
    }
    return 'bg-emerald-500 hover:bg-emerald-600 shadow-md';
  };

  const getBackspaceButtonStyle = () => {
    if (isBackspaceDisabled) {
      return disabledStyle;
    }
    return 'bg-rose-500 hover:bg-rose-600 shadow-md';
  };

  const getResetButtonStyle = () => {
    if (isLoading || currentWordLength === 0) {
      return disabledStyle;
    }
    return 'bg-yellow-500 hover:bg-yellow-600 shadow-md';
  };

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-3xl px-1">
      <div className="flex gap-1 justify-center w-full h-8">
        {rows[0].map((char) => (
          <div key={char} className="flex-1 min-w-0 h-full">
            <Button
              className={`w-full h-full text-xs text-white font-bold shadow-md ${getKeyColor(char)}`}
              onClick={() => handleCharClick(char)}
              disabled={isLoading || disableKeys}
              variant="default"
            >
              {char}
            </Button>
          </div>
        ))}
      </div>

      <div className="flex gap-1 justify-center w-[95%] h-8">
        {rows[1].map((char) => (
          <div key={char} className="flex-1 min-w-0 h-full">
            <Button
              className={`w-full h-full text-xs text-white font-bold shadow-md ${getKeyColor(char)}`}
              onClick={() => handleCharClick(char)}
              disabled={isLoading || disableKeys}
              variant="default"
            >
              {char}
            </Button>
          </div>
        ))}
      </div>

      <div className="flex gap-1 justify-center w-full h-8">
        <div className="w-[18%] h-full">
          <Button
            className={`w-full h-full flex items-center justify-center text-[10px] text-white ${getEnterButtonStyle()}`}
            onClick={onEnterClick}
            disabled={isEnterDisabled}
            title={!wordIsFull ? "Complete the word first" : "Check word"}
            variant={isEnterDisabled ? "outline" : "default"}
          >
            <FiCornerDownLeft size={16} className="mr-1 text-white" />
            <span>ENTER</span>
          </Button>
        </div>

        {rows[2].map((char) => (
          <div key={char} className="flex-1 min-w-0 h-full">
            <Button
              className={`w-full h-full text-xs text-white font-bold shadow-md ${getKeyColor(char)}`}
              onClick={() => handleCharClick(char)}
              disabled={isLoading || disableKeys}
              variant="default"
            >
              {char}
            </Button>
          </div>
        ))}

        <div className="w-[15%] h-full">
          <Button
            className={`w-full h-full flex items-center justify-center text-white ${getBackspaceButtonStyle()}`}
            onClick={onBackspaceClick}
            aria-label="Backspace"
            disabled={isBackspaceDisabled}
            variant="default"
          >
            <FiDelete size={16} className="text-white" />
          </Button>
        </div>
      </div>

      <div className="flex justify-center w-[80%] h-8 mt-1">
        <Button
          onClick={onResetGame}
          disabled={isLoading || currentWordLength === 0}
          variant="default"
          className={`w-full h-full text-xs font-bold text-white flex items-center justify-center ${getResetButtonStyle()}`}
        >
          <FiRefreshCw size={16} className="mr-2 text-white" />
          <span>Reset Game</span>
        </Button>
      </div>
    </div>
  );
};

export default Keyboard; 