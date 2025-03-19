import React, { useMemo, useCallback } from 'react';
import { useKeyboard } from '@/hooks/useKeyboard';
import { KeyboardProps } from '@/types';
import KeyButton from './KeyButton';
import { KEYBOARD_ROWS, RETRO_COLORS, DISABLED_STYLE } from '@/constants/game';

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
    const colorMap: Record<string, string> = {};
    const allChars = KEYBOARD_ROWS.flat();
    
    allChars.forEach(char => {
      const randomIndex = Math.floor(Math.random() * RETRO_COLORS.length);
      colorMap[char] = RETRO_COLORS[randomIndex];
    });
    
    return colorMap;
  }, []);

  const handleCharClick = useCallback((char: string) => {
    if (!wordIsFull && !disableKeys) {
      onCharacterClick(char);
    }
  }, [wordIsFull, disableKeys, onCharacterClick]);

  const getKeyColor = useCallback((char: string) => {
    if (disableKeys) {
      return DISABLED_STYLE;
    }
    return retroColors[char];
  }, [disableKeys, retroColors]);

  const getEnterButtonStyle = useCallback(() => {
    if (isEnterDisabled) {
      return DISABLED_STYLE;
    }
    return 'bg-emerald-500 hover:bg-emerald-600 shadow-md';
  }, [isEnterDisabled]);

  const getBackspaceButtonStyle = useCallback(() => {
    if (isBackspaceDisabled) {
      return DISABLED_STYLE;
    }
    return 'bg-rose-500 hover:bg-rose-600 shadow-md';
  }, [isBackspaceDisabled]);

  const getResetButtonStyle = useCallback(() => {
    if (isLoading || currentWordLength === 0) {
      return DISABLED_STYLE;
    }
    return 'bg-yellow-500 hover:bg-yellow-600 shadow-md';
  }, [isLoading, currentWordLength]);

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-3xl px-1">
      {KEYBOARD_ROWS.slice(0, 2).map((row, index) => (
        <div key={index} className={`flex gap-1 justify-center w-full h-8 ${index === 1 ? 'w-[95%]' : ''}`}>
          {row.map((char) => (
            <KeyButton
              key={char}
              char={char}
              onClick={handleCharClick}
              disabled={isLoading || disableKeys}
              color={getKeyColor(char)}
            />
          ))}
        </div>
      ))}

      <div className="flex gap-1 justify-center w-full h-8">
        <div className="w-[18%] h-full">
          <KeyButton
            char="ENTER"
            onClick={onEnterClick}
            disabled={isEnterDisabled}
            color={getEnterButtonStyle()}
          />
        </div>

        {KEYBOARD_ROWS[2].map((char) => (
          <KeyButton
            key={char}
            char={char}
            onClick={handleCharClick}
            disabled={isLoading || disableKeys}
            color={getKeyColor(char)}
          />
        ))}

        <div className="w-[15%] h-full">
          <KeyButton
            char="⌫"
            onClick={onBackspaceClick}
            disabled={isBackspaceDisabled}
            color={getBackspaceButtonStyle()}
          />
        </div>
      </div>

      <div className="flex justify-center w-[80%] h-8 mt-1">
        <KeyButton
          char="Reset"
          onClick={onResetGame}
          disabled={isLoading || currentWordLength === 0}
          color={getResetButtonStyle()}
        />
      </div>
    </div>
  );
};

export default Keyboard; 